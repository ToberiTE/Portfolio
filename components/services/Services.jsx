import style from "./Services.module.scss";
import { useState, useEffect } from "react";
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
      text: "Primarily fullstack, optionally either stack, React/Nextjs and C# .NET",
    },
    {
      id: "2",
      image: swdev,
      title: "Software Development",
      text: "Cross-platform software on C# .NET",
    },
    {
      id: "3",
      image: design,
      title: "UI/UX Design",
      text: "User-interfaces, -flows, architecture and experiences using tools like Figma, Inkscape and more.",
    },
    {
      id: "4",
      image: appdev,
      title: "App Development",
      text: "Cross-platform apps on React Native and C# .NET",
    },
    {
      id: "5",
      image: hosting,
      title: "Hosting",
      text: "Hosting services primarily on Azure and or cloud-first development strategy.",
    },
    {
      id: "6",
      image: doc,
      title: "Documentation",
      text: "User manuals & documentation for software, web, apis, integrations and more.",
    },
  ];
  const [visible, setVisible] = useState(false);

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
        className={`${style.container} && ${
          visible ? style.visible : style.hidden
        }`}
      >
        <div className={style.textwrapper}>
          <h2>Available Services</h2>
          <p>
            Building modern, stylish and high performance websites, from smaller
            feature or company pages, to larger and more complex webapps, using
            the latest in-demand technologies.
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
    </div>
  );
}
