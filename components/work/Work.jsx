import style from "./Work.module.scss";
import Observer from "../Observer";
import Link from "next/link";
import Image from "next/image";
import portfolio from "/public/portfolio.png";
import drift from "/public/driftservice.png";
import paint from "/public/paint.png";

export default function Work() {
  return (
    <div className={style.work} id="work">
      <Observer>
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
            <Link href="#services">
              <a className={style.button}>View Project</a>
            </Link>
          </div>
          <div className={style.card}>
            <div className={style.overlay}>
              <p className={style.text}>
                Customer service subscription page with a custom CMS and
                backend.
              </p>
            </div>
            <Image src={drift.src} className={style.img} layout="fill"></Image>
            <Link href="#services">
              <a className={style.button}>View Project</a>
            </Link>
          </div>
          <div className={style.card}>
            <div className={style.overlay}>
              <p className={style.text}>
                Lightweight paint application with potential for expansion.
              </p>
            </div>
            <Image src={paint.src} className={style.img} layout="fill"></Image>
            <Link href="#services">
              <a className={style.button}>View Project</a>
            </Link>
          </div>
        </div>
      </Observer>
    </div>
  );
}
