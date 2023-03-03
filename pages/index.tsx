import About from "@/src/components/About";
import Enterprises from "@/src/components/Enterprises/Enterprises";
import Footer from "@/src/components/Footer";
import General from "@/src/components/General";
import Whatsapp from "@/src/components/iconWhatsapp";
import WhoWeAre from "@/src/components/WhoWeAre";
import Image from "next/image";

const Home = function () {

  return (

    <div> 
      <General />
      <Enterprises />
      <WhoWeAre />
      <About />
      <Footer />

      <Whatsapp />
    </div>
  )
}

export default Home;
