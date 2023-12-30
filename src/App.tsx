import { onMount, type Component } from "solid-js";
import BuwompButton from "./buttons/buwomp/Buwomp";
import MeowButton from "./buttons/meow/Meow";
import CubeButton from "./buttons/cube/Cube";
import DarkModeButton from "./buttons/darkmode/DarkMode";

const App: Component = () => {
  return (
    <div class="p-2">
      <MeowButton />
      <BuwompButton />
      <CubeButton />
      <DarkModeButton />
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
    </div>
  );
};

export default App;
