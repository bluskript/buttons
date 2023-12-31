import { Component, Show, createSignal } from "solid-js";
import IconPhMoon from "~icons/ph/moon";
import { ButtonList } from "../../App";

const NestingButton: Component = () => {
	const [showNested, setShowNested] = createSignal(false);
	const [pos, setPos] = createSignal({ x: 0, y: 0 });
	const onClick = (ev: MouseEvent) => {
		setShowNested(!showNested());
		setPos({ x: ev.x, y: ev.y });
	};

	return (
		<>
			<button onClick={onClick}>Button Folder</button>
			<Show when={showNested()}>
				<div
					class="fixed p-2 bg-light-500 dark:bg-dark-800 rounded-md border-2 border-solid border-blue-400"
					style={{ top: `${pos().y}px`, left: `${pos().y}px` }}
				>
					<ButtonList />
				</div>
			</Show>
		</>
	);
};

export default NestingButton;
