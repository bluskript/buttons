import { onMount, type Component } from "solid-js";
import kaboomWebmUrl from "./kaboom.webm";

let disabled = false;
const KaboomButton: Component = () => {
  let button: HTMLButtonElement;
  let video: HTMLVideoElement;

  onMount(() => {
    button.addEventListener("mousedown", () => {
      if (disabled) return;
      disabled = true;
      video.volume = 0.5;
      video.play();
      button.style.visibility = "hidden";
      button.disabled = true;
    });
  });

  return (
    <div
      style={{
        display: "inline-block",
        width: "fit-content",
        position: "relative",
      }}
    >
      <video
        preload="auto"
        src={kaboomWebmUrl}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          "object-fit": "contain",
          "object-position": "center",
          "pointer-events": "none",
        }}
        ref={video}
      />
      <button
        style={{
          visibility: "visible",
        }}
        ref={button}
      >
        kaboom
      </button>
    </div>
  );
};

export default KaboomButton;
