import { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { BakeShadows, MeshReflectorMaterial } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { easing } from 'maath';
import { Grayscale } from '@react-three/postprocessing';
import { BrightnessContrast, Vignette } from '@react-three/postprocessing';
import { HueSaturation } from '@react-three/postprocessing';


import styles from './R3F.module.css';
import { Instances, Computers } from './Computers';

import * as THREE from 'three';
import logo from '../../assets/images/logo/logo.png';

function Scene({ bootComplete }) {
	return (
		<Canvas
			shadows
			dpr={[1, 1.5]}
			gl={{ toneMapping: THREE.NoToneMapping }}
			camera={{ position: [-1.5, 1.5, 5.5], fov: 45, near: 1, far: 20 }}
		>
			<EnvironmentLights />
			<group position={[0, -1, 0]}>
				<Instances>
					<Computers bootComplete={bootComplete} scale={0.5} />
				</Instances>
			</group>
			<PostFX />
			<CameraRig />
			<BakeShadows />
		</Canvas>
	);
};

function EnvironmentLights() {
	return (
		<>
			<color attach="background" args={['#000']} />
			<fog attach="fog" args={['#050505', 8, 25]} />
			<ambientLight intensity={0.02} color="#1a1a1a" />
			<directionalLight
				position={[5, 10, 10]}
				intensity={0.25} // reduced
				color="#334455" // cooler/dimmer tone
				castShadow
				shadow-mapSize={[1024, 1024]}
			/>
		</>
	);
}


function PostFX() {
	return (
		<EffectComposer disableNormalPass>
			<Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1.0} intensity={.5} />
			<DepthOfField target={[0, , 13]} focalLength={.5} bokehScale={15} height={700} />
			<HueSaturation saturation={-1} />
			<BrightnessContrast brightness={-0.3} contrast={0} />
			<Vignette eskil={false} offset={0.1} darkness={1.1} />
		</EffectComposer>
	);
}

function CameraRig() {
	useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[(-state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2 + 0.5, 5.5],
			0.5,
			delta
		);
		state.camera.lookAt(0, 2, 0);
	});
}

function Overlay({ onComplete }) {
	const [dateTime, setDateTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDateTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formatted = dateTime.toLocaleString('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false,
	});

	return (
		<>
			<div className={styles.overlay}>
				<TerminalTyper onComplete={onComplete} />
				<div className={styles.topRight}>
					{formatted}
				</div>
				<div className={styles.bottomRight}>
					<div>1.0.0</div>
					<a
						href="https://sketchfab.com/3d-models/cathedral-notre-dame-at-rouen-6bef65b1c17741e49cbaa8240ac3ec74"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.sourceLink}
					>
						{"source <"}
					</a>
				</div>
			</div>
			<img src={logo} alt="corey Logo" className={styles.logo} />
		</>
	);
};

function TerminalTyper({ onComplete }) {
	const [currentLine, setCurrentLine] = useState('');
	const [lineIndex, setLineIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [showFinal, setShowFinal] = useState(false);

	const staticLine = '';
	const transientLines = [
		'> loading 3D scene...'
	];
	const finalLine = '> status: LIVE';

	useEffect(() => {
		let timeout;

		if (showFinal) return;

		const lines = [...transientLines, finalLine];
		const line = lines[lineIndex];

		if (charIndex < line.length) {
			timeout = setTimeout(() => {
				setCurrentLine(prev => prev + line[charIndex]);
				setCharIndex(charIndex + 1);
			}, 30);
		} else {
			if (lineIndex === transientLines.length) {
				// Final line reached – stop here
				setShowFinal(true);
				if (onComplete) onComplete();
			} else {
				// Move to next line
				timeout = setTimeout(() => {
					setCurrentLine('');
					setCharIndex(0);
					setLineIndex(lineIndex + 1);
				}, 1000);
			}
		}

		return () => clearTimeout(timeout);
	}, [charIndex, lineIndex, showFinal]);

	function highlight(text) {
		if (text.includes('OK')) {
			const [before, after] = text.split('OK');
			return <>{before}<span className={styles.ok}>OK</span>{after}</>;
		}
		if (text.includes('LIVE')) {
			const [before, after] = text.split('LIVE');
			return <>{before}<span className={styles.ok}>LIVE</span>{after}</>;
		}
		return text;
	}

	return (
		<div className={styles.topLeft}>
			<div className={styles.terminalLine}>{staticLine}</div>
			<div className={styles.terminalLine}>{highlight(currentLine)}</div>
		</div>
	);
};

const R3F = () => {
	const [bootComplete, setBootComplete] = useState(false);

	return (
		<div className={styles.container}>
			<Scene bootComplete={bootComplete} />
			<Overlay onComplete={() => setBootComplete(true)} />
		</div>
	)
};

export default R3F;