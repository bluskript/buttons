import { Component } from "solid-js";

const YesButton: Component = () => {
	const onClick = async () => {
		const yahoo = document.createElement("div");
		Object.assign(yahoo.style, {
			position: "absolute",
			left: 0,
			top: 0,
		});
		yahoo.innerHTML = (await import("./index.html?raw")).default;
		document.body.appendChild(yahoo);
	};

	return <button onClick={onClick}>yes</button>;
};

export default YesButton;
