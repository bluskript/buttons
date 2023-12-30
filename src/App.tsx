import { onMount, type Component } from 'solid-js';
import meowUrl from './meow.mp3'
import { css } from 'vite-plugin-inline-css-modules';

const MeowButton: Component = () => {
  let button: HTMLButtonElement;
  onMount(() => {
    button.addEventListener("click", () => (new Audio(meowUrl)).play())
  })

  return (
    <button ref={button} class="bg-blue-400">Meow</button>
  )
}

const App: Component = () => {
  return (
    <div>
      <MeowButton />
    </div>
  );
};

export default App;
