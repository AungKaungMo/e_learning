import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types/types";

import Navbar from "@/pages/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import MiniSection from "@/pages/Home/MiniSection";
import Courses from "@/pages/MostPopular";
import Project from "@/pages/Project";
import Reviews from "@/pages/Reviews";
import Footer from "@/pages/Footer";

function Landing() {
  const [isTop, setIsTop] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY != 0) setIsTop(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className=" overflow-hidden font-heebo">
      <Navbar
        isTop={isTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <MiniSection />
      <About setSelectedPage={setSelectedPage} />
      <Courses setSelectedPage={setSelectedPage} />
      <Project setSelectedPage={setSelectedPage} />
      <Reviews setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default Landing;
