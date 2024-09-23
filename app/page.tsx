import Hero from "./component/hero/hero";
import Sticker from "./component/sticker/sticker";
import About from "./component/aboutMe/about";
import Testi from "./component/testimoni/testimoni";
import Mentor from "./component/mentor/mentor";
import Mentor2 from "./component/mentor/mentor-2";
import Sponsor from "./component/sponsor/sponsor";
import Footer from "./component/footer/footer";
export default function Home() {
  return (
    <div className="font-inter">
      <Hero></Hero>
      <Sticker></Sticker>
      <About></About>
      <Testi></Testi>

      <Mentor></Mentor>
      <Mentor2></Mentor2>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  );
}
