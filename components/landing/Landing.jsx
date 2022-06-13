import style from "./Landing.module.scss";
import Link from "next/link";
import Observer from "../Observer";
import { useState, useEffect } from "react";

export default function Landing() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const landing = document.getElementById("landing");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting ? setShowElement(true) : setShowElement(false);
      },
      { threshold: 0.8 }
    );
    observer.observe(landing);
    return () => observer.unobserve(landing);
  });

  return (
    <div className={style.landing} id="landing">
      <Link href="#services">
        <a className={style.skipbtn}>Skip to content</a>
      </Link>
      <div className={style.container}>
        <Observer>
          {/* PUT GLOBE/OSI MODEL SVG HERE */}
          <h1>Digital Carpentry.</h1>
          <h2>
            Making <span>IT</span> all come full circle
          </h2>
          <Link href="#services">
            <a className={style.landingbtn}>Learn more</a>
          </Link>
        </Observer>
      </div>
      <Link href="#services">
        <a
          className={`${style.scroll} && ${
            showElement ? style.show : style.hide
          }`}
        ></a>
      </Link>
    </div>
  );
}
