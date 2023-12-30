import { Component, onMount } from "solid-js";
import meowUrl from "./meow.mp3";

const MeowButton: Component = () => {
  const onClick = () => {
    const buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((b) =>
      b.addEventListener("mousedown", () =>
        setTimeout(() => new Audio(meowUrl).play(), Math.random() * 300),
      ),
    );
  };

  return (
    <button onClick={onClick} class="bg-blue-400">
      Meow
    </button>
  );
};

export default MeowButton;
