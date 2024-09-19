import Hero from "./component/hero/hero";
import Sticker from "./component/sticker/sticker";
import About from "./component/aboutMe/about";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Sticker></Sticker>
      <About></About>
    </div>
  );
}
