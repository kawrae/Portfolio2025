import React from 'react';
import './Testimonials.css';

import { useGateway } from '../../context/GatewayContext';

import TestimonialCard from '../../components/card/testimonial/TestimonialCard';

function Testimonials() {
	const { testimonials } = useGateway();

	return (
		<section className="testimonials">
			<div className="text-title">
				Stories of <b>success</b>
			</div>
			<p className="subtext">Discover how our projects have made an impact for our clients and partners.</p>
			<div className="testimonials-grid">
				{testimonials.map((item, index) => (
					<TestimonialCard
						key={index}
						testimonial={item}
						// quote={item.quote}
						// client={`${item.client?.contact_name || ''}${item.client?.contact_name && item.client?.company_name ? ', ' : ''}${item.client?.company_name || ''}`}
					/>
				))}
			</div>
		</section>
	);
}

export default Testimonials;