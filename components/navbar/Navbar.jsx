import Themetoggle from "../themetoggle/Themetoggle";
import { useState, useRef, useEffect } from "react";
import style from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [navStyle, setNavStyle] = useState(false);
  const [landingHref, setLandingHref] = useState(false);
  const [servicesHref, setServicesHref] = useState(false);
  const [workHref, setWorkHref] = useState(false);
  const [contactHref, setContactHref] = useState(false);

  useEffect(() => {
    const landing = document.getElementById("landing");
    const observer = new IntersectionObserver(
      ([el]) => {
        setLandingHref(el.isIntersecting);
      },
      { threshold: 0.9 }
    );
    observer.observe(landing);
    return () => observer.unobserve(landing);
  });

  useEffect(() => {
    const services = document.getElementById("services");
    const observer = new IntersectionObserver(
      ([el]) => {
        setServicesHref(el.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(services);
    return () => observer.unobserve(services);
  });

  useEffect(() => {
    const work = document.getElementById("work");
    const observer = new IntersectionObserver(
      ([el]) => {
        setWorkHref(el.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(work);
    return () => observer.unobserve(work);
  });

  useEffect(() => {
    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver(
      ([el]) => {
        setContactHref(el.isIntersecting);
      },
      { threshold: 0.9 }
    );
    observer.observe(contact);
    return () => observer.unobserve(contact);
  });

  useEffect(() => {
    const nav = document.querySelector("header");
    const observer = new IntersectionObserver(([el]) => {
      setNavStyle(el.intersectionRatio < 1);
    });
    observer.observe(nav);
    return () => observer.unobserve(nav);
  });

  const navRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      !navRef.current.contains(e.target) ? setOpen(false) : "";
    };
    document.addEventListener("touchstart", handleClick);
    return () => document.removeEventListener("touchstart", handleClick);
  });

  return (
    <div
      className={`${style.navbar} ${navStyle ? style.scrolling : ""}`}
      ref={navRef}
    >
      <Link href="/">
        <a
          className={`${style.logo} ${navStyle ? style.logoSmall : ""}`}
          aria-label="website logo"
        ></a>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="nav"
        aria-expanded={open}
        className={style.navbtn}
      >
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>

        <span className="sr-only">Menu</span>
      </button>

      <nav className={style.nav} data-visible={open}>
        <ul>
          <li>
            <Link href="/">
              <a
                onClick={() => setOpen(!open)}
                className={`${navStyle ? style.linkSmall : ""} ${
                  landingHref ? style.active : ""
                }`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a
                onClick={() => setOpen(!open)}
                className={`${navStyle ? style.linkSmall : ""} ${
                  servicesHref ? style.active : ""
                }`}
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="#work">
              <a
                onClick={() => setOpen(!open)}
                className={`${navStyle ? style.linkSmall : ""} ${
                  workHref ? style.active : ""
                }`}
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a
                onClick={() => setOpen(!open)}
                className={`${navStyle ? style.linkSmall : ""} ${
                  contactHref ? style.active : ""
                }`}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <Themetoggle />
      </nav>
    </div>
  );
}
