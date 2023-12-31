import { vec2, vec3 } from "gl-matrix";
import { Component } from "solid-js";

const els = "button, p, span, a, img, input, h1, h2, h3, h4, h5, h6"

const ImpulseButton: Component = () => {
	const onClick = async (ev: MouseEvent) => {
		await import("./impulse.css");
		const elements = Array.from(document.querySelectorAll(els));
		for (const el of elements) {
			const rect = el.getBoundingClientRect();
			const { x, y } = rect;
			Object.assign(el.style, {
				left: `${Math.floor(x)}px`,
				top: `${Math.floor(y)}px`,
			});
		}
		for (const el of elements) {
			el.style.position = "absolute";
		}
		const handle = ({ x: mouseX, y: mouseY }: MouseEvent) => {
			const elements = Array.from(document.querySelectorAll(els));
			for (const el of elements) {
				const rect = el.getBoundingClientRect();
				const { x, y, width, height } = rect;
				const mx = x + width / 2;
				const my = y + height / 2;
				let moveVec = vec2.fromValues(mx - mouseX, my - mouseY);
				moveVec = vec2.scale(moveVec, moveVec, 50 / vec2.len(moveVec));

				Object.assign(el.style, {
					left: `${Math.floor(x + moveVec[0])}px`,
					top: `${Math.floor(y + moveVec[1])}px`,
				});
			}
			for (const el of elements) {
				el.style.position = "absolute";
			}
		};
		window.addEventListener("click", handle);
		handle(ev);
	};

	return (
		<button onClick={onClick} class="font-bold font-italic">
			BONK
		</button>
	);
};

export default ImpulseButton;
