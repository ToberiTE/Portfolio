import style from "./Work.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import portfolio from "/public/portfolio.png";
import drift from "/public/driftservice.png";
import paint from "/public/paint.png";

export default function Work() {
  const [visible, setVisible] = useState(false);
  const [showWorkScroll, setShowWorkScroll] = useState(true);

  useEffect(() => {
    const work = document.getElementById("work");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting ? setShowWorkScroll(true) : setShowWorkScroll(false);
      },
      { threshold: 1 }
    );
    observer.observe(work);
    return () => observer.unobserve(work);
  });
  useEffect(() => {
    const work = document.getElementById("work");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    observer.observe(work);
    return () => observer.unobserve(work);
  });
  return (
    <div className={style.work} id="work">
      <div className={`${style.container} ${visible ? "visible" : "hidden"}`}>
        <div className={style.textwrapper}>
          <h2>Sample My Work</h2>
          <p>
            Fullstack websites, static pages and dynamic frontends built on MVC,
            React and NextJS.
          </p>
          <p>Backends and APIs built on .NET 4.x and upwards.</p>
          <p>A variety of desktop applications and more.</p>
        </div>

        <div className={style.cardwrapper}>
          <div className={style.card}>
            <div className={style.overlay}>
              <p className={style.text}>
                See the work behind Portfolio revision 3.
              </p>
            </div>
            <Image
              src={portfolio.src}
              className={style.img}
              layout="fill"
            ></Image>
            <a
              href="https://github.com/ToberiTE/Portfolio"
              target="_blank"
              rel="noreferrer"
              className={style.button}
            >
              View Project
            </a>
          </div>
          <div className={style.card}>
            <div className={style.overlay}>
              <p className={style.text}>
                Customer service subscription page with a custom CMS and
                backend.
              </p>
            </div>
            <Image src={drift.src} className={style.img} layout="fill"></Image>
            <a
              href="https://github.com/ToberiTE/Driftservice-Registration"
              target="_blank"
              rel="noreferrer"
              className={style.button}
            >
              View Project
            </a>
          </div>
          <div className={style.card}>
            <div className={style.overlay}>
              <p className={style.text}>
                Lightweight paint application with potential for expansion.
              </p>
            </div>
            <Image src={paint.src} className={style.img} layout="fill"></Image>
            <a
              href="https://github.com/ToberiTE/PaintApp"
              target="_blank"
              rel="noreferrer"
              className={style.button}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <Link href="#contact">
        <a className={`scroll ${showWorkScroll ? "show" : "hide"}`}></a>
      </Link>
    </div>
  );
}
