import { onMount, type Component } from "solid-js";
import BuwompButton from "./buttons/buwomp/Buwomp";
import MeowButton from "./buttons/meow/Meow";
import CubeButton from "./buttons/cube/Cube";
import DarkModeButton from "./buttons/darkmode/DarkMode";
import BadButton from "./buttons/badbutton/BadButton";
import ImpulseButton from "./buttons/impulse/Impulse";
import YesButton from "./buttons/yes/Yes";
import NestingButton from "./buttons/nesting/Nesting";
import VoltraButton from "./buttons/musik/Musik";

export const ButtonList = () => (
  <>
    <MeowButton />
    <BuwompButton />
    <CubeButton />
    <DarkModeButton />
    <ImpulseButton />
    <YesButton />
    <NestingButton />
    <VoltraButton />
    <br />
    <BadButton />
  </>
);

const App: Component = () => {
  return (
    <div class="w-full h-full flex items-center justify-center">
      <div class="p-2 bg-light-500 dark:bg-dark-800 min-h-80">
        <ButtonList />
      </div>
    </div>
  );
};

export default App;
