import { Component } from "solid-js";

const VoltraButton: Component = () => {
	const onClick = () => {
		const handler = () => {
			const audioContext = new AudioContext();
			const numWaves = Math.floor(Math.random() * 6) + 3; // Random number between 3 and 8
			const gainNode = audioContext.createGain();
			gainNode.gain.value = 0.1; // Reduce volume to 10%
			gainNode.connect(audioContext.destination);
			for (let i = 0; i < numWaves; i++) {
				const oscillator = audioContext.createOscillator();
				oscillator.type = "sine";
				oscillator.frequency.value = Math.random() * 14000;
				oscillator.connect(gainNode);
				oscillator.start();
				setTimeout(() => oscillator.stop(), 200);
			}
		};

		const els = Array.from(document.querySelectorAll("button"));
		for (const el of els) {
			el.addEventListener("mousedown", handler);
		}
		handler()
	};

	return <button onClick={onClick}>I LOVE VOLTRA!!!</button>;
};

export default VoltraButton;
