import { onMount, type Component } from "solid-js";
import BuwompButton from "./buttons/buwomp/Buwomp";
import MeowButton from "./buttons/meow/Meow";
import CubeButton from "./buttons/cube/Cube";

const App: Component = () => {
  return (
    <div class="p-2">
      <MeowButton />
      <BuwompButton />
      <CubeButton />
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
      <button>meow</button>
    </div>
  );
};

export default App;
