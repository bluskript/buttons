import { Component, onMount } from "solid-js";
import meowUrl from "./meow.mp3";

const MeowButton: Component = () => {
  let button: HTMLButtonElement;
  onMount(() => {
    button.addEventListener("click", () => new Audio(meowUrl).play());
  });

  return (
    <button ref={button} class="bg-blue-400">
      Meow
    </button>
  );
};

export default MeowButton
