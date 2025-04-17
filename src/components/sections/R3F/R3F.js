import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';
import * as THREE from 'three';
import './R3F.css';

// 1) Single building with neon edges & slightly emissive material
function Building({ position, height }) {
	return (
		<mesh position={position}>
			<boxBufferGeometry args={[2, height, 2]} />
			<meshStandardMaterial
				color="#111"          // Dark grey base
				emissive="#001f33"    // Subtle blue glow
				emissiveIntensity={0.3}
			/>
			<Edges threshold={15} scale={1} color="#00ccff" /> 
		</mesh>
	);
}

// 2) Data lines connecting random building tops
function DataLines({ buildingPositions }) {
	const groupRef = useRef();

	// Generate random lines between building tops
	const linesData = useMemo(() => {
		const lines = [];
		const numLines = 50;
		for (let i = 0; i < numLines; i++) {
			const start = buildingPositions[Math.floor(Math.random() * buildingPositions.length)];
			const end = buildingPositions[Math.floor(Math.random() * buildingPositions.length)];
			lines.push({ start, end });
		}
		return lines;
	}, [buildingPositions]);

	// Animate line colour over time for that digital pulse
	useFrame(({ clock }) => {
	if (groupRef.current) {
		groupRef.current.children.forEach((line, idx) => {
			const t = clock.elapsedTime + idx;
			const alpha = (Math.sin(t) + 1) / 2; // cycles between 0 and 1
			line.material.color.setHSL(0.5, 1, alpha * 0.5 + 0.2); 
			// 0.5 hue = cyan/blue, then we vary lightness a bit
		});
	}
	});

	return (
	<group ref={groupRef}>
		{linesData.map((l, idx) => (
		<line key={idx}>
			<bufferGeometry>
			<bufferAttribute
				attach="attributes-position"
				count={2}
				array={new Float32Array([...l.start, ...l.end])}
				itemSize={3}
			/>
			</bufferGeometry>
			<lineBasicMaterial color="#00ccff" />
		</line>
		))}
	</group>
	);
}

// 3) Procedural city: grid of pulsing buildings + data lines
function ProceduralCity() {
	const groupRef = useRef();

	const { buildingData, buildingPositions } = useMemo(() => {
	const data = [];
	const positions = [];
	const gridSize = 20;
	const spacing = 3;

	for (let x = 0; x < gridSize; x++) {
		for (let z = 0; z < gridSize; z++) {
		const posX = (x - gridSize / 2) * spacing;
		const posZ = (z - gridSize / 2) * spacing;
		const baseHeight = Math.random() * 5 + 2; // random height 2-7

		data.push({ position: [posX, baseHeight / 2, posZ], baseHeight });
		positions.push([posX, baseHeight, posZ]); // top of building
		}
	}
	return { buildingData: data, buildingPositions: positions };
	}, []);

	// Animate building heights (pulsing effect)
	useFrame(({ clock }) => {
		if (groupRef.current) {
			const time = clock.elapsedTime;
			groupRef.current.children.forEach((mesh, idx) => {
			const { baseHeight } = buildingData[idx];
			const scaleY = baseHeight + Math.sin(time + idx) * 0.5;
			mesh.scale.y = scaleY / baseHeight;
			mesh.position.y = scaleY / 2;
			});
		}
	});

	return (
	<>
		<group ref={groupRef}>
		{buildingData.map((b, idx) => (
			<Building key={idx} position={b.position} height={b.baseHeight} />
		))}
		</group>
		<DataLines buildingPositions={buildingPositions} />
	</>
);
}

// 4) “Fake” bottom fog: a big translucent cylinder
function BottomFog() {
	// Cylinder stands upright by default, so no rotation needed
	// openEnded = true so we don't have top/bottom caps
	return (
		<mesh position={[0, 0, 0]}>
			<cylinderBufferGeometry args={[60, 60, 20, 32, 1, true]} />
			<meshBasicMaterial
			color="#00ccff"
			transparent
			opacity={0.1}
			side={THREE.DoubleSide}
			/>
		</mesh>
	);
}

// 5) Camera rig: rotate around the city
function CameraRig() {
	useFrame(({ camera, clock }) => {
		const t = clock.elapsedTime * 0.05;
		camera.position.x = Math.sin(t) * 40;
		camera.position.z = Math.cos(t) * 40;
		camera.position.y = 15;
		camera.lookAt(0, 0, 0);
	});
	return null;
}

// 6) Scene: background, lighting, city, bottom fog, camera rig
function Scene() {
	return (
		<>
			{/* Black background for that cyberpunk look */}
			<color attach="background" args={['#000000']} />
			
			{/* Subtle lighting so edges and emissive glow stand out */}
			<ambientLight intensity={0.2} />
			<directionalLight position={[50, 50, 50]} intensity={0.7} />

			<ProceduralCity />
			{/* <BottomFog /> */}
			<CameraRig />
		</>
	);
}

// 7) Main R3F component
export default function R3F() {
	return (
		<div className="placeholder">
			<div className="viewport">
			<div className="r3f-container" style={{ width: '100vw', height: '100vh' }}>
				<Canvas camera={{ position: [40, 15, 40], fov: 60 }}>
				<Scene />
				<OrbitControls enableZoom={false} />
				</Canvas>
			</div>
			</div>
		</div>
	);
}
