import style from "./Services.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../card/Card";
import webdev from "/public/webdev.svg";
import swdev from "/public/swdev.svg";
import design from "/public/design.svg";
import appdev from "/public/appdev.svg";
import hosting from "/public/hosting.svg";
import doc from "/public/doc.svg";

export default function Services() {
  const cards = [
    {
      id: "1",
      image: webdev,
      title: "Web Development",
      text: "Primarily fullstack, front- and backends/apis to large scale applications, services and systems.",
    },
    {
      id: "2",
      image: swdev,
      title: "Software Development",
      text: "Cross-platform software & systems.",
    },
    {
      id: "3",
      image: design,
      title: "UI/UX Design",
      text: "User -interfaces, -flows, architecture, experiences and more.",
    },
    {
      id: "4",
      image: appdev,
      title: "App Development",
      text: "Cross-platform apps.",
    },
    {
      id: "5",
      image: hosting,
      title: "Hosting",
      text: "Regular hosting services and or cloud development strategies.",
    },
    {
      id: "6",
      image: doc,
      title: "Documentation",
      text: "User manuals & documentation for software, webapps and more.",
    },
  ];

  const [showServicesScroll, setShowServicesScroll] = useState(true);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const services = document.getElementById("services");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting
          ? setShowServicesScroll(true)
          : setShowServicesScroll(false);
      },
      { threshold: 1 }
    );
    observer.observe(services);
    return () => observer.unobserve(services);
  });
  useEffect(() => {
    const services = document.getElementById("services");
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    observer.observe(services);
    return () => observer.unobserve(services);
  });

  return (
    <div className={style.services} id="services">
      <div
        className={`${style.container} ${
          visible ? style.visible : style.hidden
        }`}
      >
        <div className={style.textwrapper}>
          <h2>Available Services</h2>
          <p>
            Building modern, eyecatching and high performance websites, from
            smaller landing or feature pages, to larger and more complex webapps
            and systems, using the latest in-demand technologies.
          </p>
          <p>
            Designing user-flows, interfaces, architecture and more. Tailored to
            any need and device.{" "}
            <span>Compliant with accessibility guidelines.</span>
          </p>
          <p>
            Cloud hosting for a centralized, scalable, and reliable solution.
          </p>
          <p>Cross-platform software and mobile apps.</p>
        </div>

        <div className={style.cardwrapper}>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
      <Link href="#work">
        <a className={`scroll ${showServicesScroll ? "show" : "hide"}`}></a>
      </Link>
    </div>
  );
}
