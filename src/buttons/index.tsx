import { onMount } from "solid-js"

export const vanillaButton = (handler: (button: HTMLButtonElement) => any) => {
	return () => {
		let button: HTMLButtonElement;
		onMount(() => handler(button));

		return (
			<button ref={button}>
				Meow
			</button>
		);
	}
}

