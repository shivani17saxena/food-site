import Collaborate from "./Collaborate";
import Community from "./Community";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Map from "./Map";
import Menu from "./Menu";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Community />
      <Map />
      <Menu />
      <Collaborate />
      <Footer />
    </>
  );
}