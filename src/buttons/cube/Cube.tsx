import { Component, onMount } from "solid-js";

const CubeButton: Component = () => {
  let button: HTMLButtonElement;
  onMount(() => {
  });

  return (
    <button ref={button} class="bg-blue-400">
      Cubeeee!!
    </button>
  );
}

export default CubeButton
