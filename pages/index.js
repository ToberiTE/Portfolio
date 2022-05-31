import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/Landing";
import Services from "../components/services/Services";
import Work from "../components/work/Work";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { storedTheme } from "../components/themes";

export default function Home() {
  useEffect(() => {
    storedTheme();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="sections">
          <Landing />
          <Services />
          <Work />
          <Footer />
        </div>
      </main>
    </>
  );
}
