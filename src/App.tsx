import { onMount, type Component } from "solid-js";
import BuwompButton from "./buttons/buwomp/Buwomp";
import MeowButton from "./buttons/meow/Meow";
import CubeButton from "./buttons/cube/Cube";

const App: Component = () => {
  return (
    <div class="flex gap-2 flex-wrap p-2">
      <MeowButton />
      <BuwompButton />
      <CubeButton />
    </div>
  );
};

export default App;
