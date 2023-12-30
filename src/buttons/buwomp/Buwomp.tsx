import { onMount, type Component } from "solid-js";
import buwompSndUrl from "./buwomp.mp3";
import buwompBgUrl from "./buwomp.jpg";

const buwompSnd = new Audio(buwompSndUrl);

let playing = false;

const BuwompButton: Component = () => {
  let button: HTMLButtonElement;
  onMount(() => {
    button.addEventListener("mousedown", () => {
      if (playing) return;
      playing = true;
      document.body.style.backgroundImage = `url(${buwompBgUrl})`;
      document.body.style.backgroundPosition = "top center";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundRepeat = "no-repeat";
      buwompSnd.play();
      const buwompDone = () => {
        buwompSnd.removeEventListener("ended", buwompDone);
        document.body.style.backgroundImage = "initial";
        document.body.style.backgroundPosition = "initial";
        document.body.style.backgroundSize = "initial";
        document.body.style.backgroundRepeat = "initial";
        playing = false;
      };
      buwompSnd.addEventListener("ended", buwompDone);
    });
  });

  return <button ref={button}>buwomp</button>;
};

export default BuwompButton;
