import { onMount, type Component } from "solid-js";
import kaboomSndUrl from "./kaboom.mp3";
import kaboomAnimUrl from "./kaboom.mp4";

const kaboomAudio = new Audio(kaboomSndUrl);

const kaboomVd = document.createElement("video");
kaboomVd.src = kaboomAnimUrl;

const MeowButton: Component = () => {
  let button: HTMLButtonElement;
  onMount(() => {
    button.addEventListener("mousedown", () => {});
  });

  return (
    <button ref={button} class="p-4 m-4">
      🧨
    </button>
  );
};
