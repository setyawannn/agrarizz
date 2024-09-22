import Hero from "./component/hero/hero";
import Sticker from "./component/sticker/sticker";
import About from "./component/aboutMe/about";
import Testi from "./component/testimoni/testimoni";
import Mentor from "./component/mentor/mentor";
export default function Home() {
  return (
    <div className="font-inter">
      <Hero></Hero>
      <Sticker></Sticker>
      <About></About>
      <Testi></Testi>

      <Mentor></Mentor>
    </div>
  );
}
