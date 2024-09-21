import Hero from "./component/hero/hero";
import Sticker from "./component/sticker/sticker";
import About from "./component/aboutMe/about";
import Testi from "./component/testimoni/testimoni";
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Sticker></Sticker>
      <About></About>
      <Testi></Testi>
    </div>
  );
}
