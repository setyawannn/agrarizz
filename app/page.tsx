import Hero from "./component/hero/hero";
import Sticker from "./component/sticker/sticker";
import About from "./component/about/about";
import Testi from "./component/testimoni/testimoni";
import Mentor from "./component/mentor/mentor";
import Mentor2 from "./component/mentor/mentor-2";
import Sponsor from "./component/sponsor/sponsor";
import Footer from "./component/footer/footer";
import UpcomingEvent from "./component/Upcoming/UpcomingEvent";
export default function Home() {
  return (
    <div className="font-inter">
      <Hero></Hero>
      <Sticker></Sticker>
      <About></About>
      <Testi></Testi>
      <UpcomingEvent />
      <Mentor></Mentor>
      <Mentor2></Mentor2>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  );
}
