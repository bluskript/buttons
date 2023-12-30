import {
  Component,
  For,
  createEffect,
  createReaction,
  createSignal,
  onMount,
} from "solid-js";
import { vec3 } from "gl-matrix";
import { projectPoints, rotate } from "./projections";

const CubeButton: Component = () => {
  const [values, setValues] = createSignal(
    (
      [
        [-1, -1, -1],
        [-1, -1, 1],
        [-1, 1, 1],
        [1, -1, -1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, -1],
        [1, 1, -1],
      ] as [number, number, number][]
    ).map((x) => vec3.fromValues(...x)),
  );
  let [r, setR] = createSignal(0);
  const rotated = () => rotate(values(), r(), r() * 0.1, 0);
  const projected = () => projectPoints(rotated(), r());
  let button: HTMLButtonElement;
  const onClick = () => {
    setInterval(() => {
      setR(r() + 0.01);
    }, 1);

    const buttons = Array.from(document.querySelectorAll("button"));
    createEffect(() => {
      for (let i = 0; i < projected().length; i++) {
        const p = projected()[i];
        if (!buttons[i]) continue;
        Object.assign(buttons[i].style, {
          position: "absolute",
          top: `${50 - 10 * p[0]}%`,
          left: `${50 - 10 * p[1]}%`,
        });
      }
    });
  };

  return (
    <div class="w-full flex flex-col gap-4">
      <button ref={button} class="bg-blue-400" onClick={onClick}>
        Cubeeee!!
      </button>
    </div>
  );
};

export default CubeButton;
