import { Component } from "solid-js";
import IconPhMoon from '~icons/ph/moon'

const DarkModeButton: Component = () => {
	const onClick = () => document.body.classList.toggle("dark");

	return (
		<button onClick={onClick}>
			<IconPhMoon class="align-middle" />
		</button>
	);
};

export default DarkModeButton;
