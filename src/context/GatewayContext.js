import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const GatewayContext = createContext();

export const GatewayProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);
	const [tags, setTags] = useState({});
	const [clientQuotes, setClientQuotes] = useState([]);
	const [timelineEntries, setTimelineEntries] = useState([]);
	const [teamQuotes, setTeamQuotes] = useState([]);
	const [socialItems, setSocialItems] = useState([]);

	const featuredProjects = projects.filter(p => p.is_featured);

	const getProjectById = (id) => projects.find(p => p.id === id);

	useEffect(() => {
		const fetchProjectsAndTags = async () => {
			const { data: projectData, error: projectError } = await supabase
				.from('projects')
				.select(`
					*,
					project_tags(tag_id, tags(id, name, tag_categories(id, name)))
				`)
				.order('display_order', { ascending: true });

			if (projectError) {
				console.error('Error fetching projects:', projectError);
				return;
			}

			const processedProjects = projectData.map(project => ({
				...project,
				tags: project.project_tags.map(pt => pt.tags),
			}));

			setProjects(processedProjects);

			const usedTagIds = new Set(
				processedProjects.flatMap(project => project.tags.map(tag => tag.id))
			);

			const { data: tagData, error: tagError } = await supabase
				.from('tags')
				.select('id, name, tag_categories(id, name)')
				.order('name', { ascending: true });

			if (tagError) {
				console.error('Error fetching tags:', tagError);
				return;
			}

			const filteredTags = tagData.filter(tag => usedTagIds.has(tag.id));

			const categoryMap = new Map();
			filteredTags.forEach(tag => {
				const categoryId = tag.tag_categories?.id ?? 9999;
				const categoryName = tag.tag_categories?.name || 'Uncategorised';

				if (!categoryMap.has(categoryId)) {
					categoryMap.set(categoryId, { name: categoryName, tags: [] });
				}
				categoryMap.get(categoryId).tags.push(tag);
			});

			const groupedTags = {};
			[...categoryMap.entries()]
				.sort((a, b) => a[0] - b[0])
				.forEach(([_, group]) => {
					groupedTags[group.name] = group.tags;
				});

			setTags(groupedTags);
		};

		const fetchClientQuotes = async () => {
			const { data, error } = await supabase
				.from('client_quotes')
				.select(`
					*,
					client:clients (
						company_name,
						contact_name,
						media_url
					)
				`)
				.order('display_order', { ascending: true });

			if (error) {
				console.error('Error fetching client quotes:', error);
				return;
			}

			const processed_quotes = data.map(q => {
				const client = q.client || {};
				return {
					id: q.id,
					quote: q.quote,
					name: client.contact_name || 'Unknown',
					roleOrCompany: client.company_name || '',
					social_links: null,
					imageUrl: client.media_url || '',
				};
			});

			setClientQuotes(processed_quotes);
		};

		const fetchTimelineEntries = async () => {
			const { data, error } = await supabase
				.from('timeline_entries')
				.select('*')
				.order('sort_date', { ascending: true });

			if (error) {
				console.error('Error fetching timeline entries:', error);
				return;
			}

			setTimelineEntries(data);
		};

		const fetchTeamQuotes = async () => {
			const { data, error } = await supabase
				.from('team_quotes')
				.select(`
					id,
					quote,
					team_members (
						id,
						first_name,
						last_name,
						role,
						media_url,
						social
					)
				`)
				.order('display_order', { ascending: true });
		
			if (error) {
				console.error('Error fetching quotes:', error);
				return;
			}
		
			const processed_quotes = data.map(q => ({
				id: q.id,
				quote: q.quote,
				name: `${q.team_members.first_name} ${q.team_members.last_name}`,
				roleOrCompany: q.team_members.role,
				social: q.team_members.social || null,
				imageUrl: q.team_members.media_url,
			}));
		
			setTeamQuotes(processed_quotes);
		};

		const fetchSocialItems = async () => {
			const { data, error } = await supabase
				.from('social')
				.select('*')
				.order('display_order', { ascending: true });

			if (error) {
				console.error('Error fetching social items:', error);
				return;
			}

			setSocialItems(data);
		};

		fetchProjectsAndTags();
		fetchClientQuotes();
		fetchTimelineEntries();
		fetchTeamQuotes();
		fetchSocialItems();
	}, []);

	return (
		<GatewayContext.Provider
			value={{
				projects,
				featuredProjects,
				tags,
				clientQuotes,
				timelineEntries,
				teamQuotes,
				socialItems,

				getProjectById,
			}}
		>
			{children}
		</GatewayContext.Provider>
	);
};

export const useGateway = () => useContext(GatewayContext);