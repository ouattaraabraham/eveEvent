import Image from "next/image";
import Service from "./component/Service";
import PresantationHome from "./component/PresantationHome";
import ServiceEvents from "./component/ServiceEvents";
import Apropos from "./component/Apropos";
import Motivation from "./component/Motivation";
import { SliderCard } from "./component/SliderCard";
// import VideoSection from "./component/VideoSection";
import Galerie from "./component/Galerie";

export default function Home() {
  return (
    <main>
      <SliderCard/>
       <Service/>
       <PresantationHome/>
       <ServiceEvents/>
       {/* <VideoSection/> */}
       <Apropos/>
       <Galerie/>
    </main>
  );
}
