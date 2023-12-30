import { onMount, type Component } from "solid-js";
import BuwompButton from "./buttons/buwomp/Buwomp";
import MeowButton from "./buttons/meow/Meow";

const App: Component = () => {
  return (
    <div>
      <MeowButton />
      <BuwompButton />
    </div>
  );
};

export default App;
