import { useEffect, useState } from "react";
import { setTheme } from "../themes";
import style from "./Themetoggle.module.scss";

export default function Themetoggle() {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    if (localStorage.getItem("theme") === "dark-theme") {
      setTheme("light-theme");
      setActive(true);
    } else {
      setTheme("dark-theme");
      setActive(false);
    }
  };

  const handleKeypress = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  useEffect(() => {
    localStorage.getItem("theme") === "dark-theme" ||
    localStorage.getItem("theme") === null
      ? setActive(false)
      : localStorage.getItem("theme") === "light-theme"
      ? setActive(true)
      : "";
  });
  return (
    <div
      onClick={clickHandler}
      onKeyUp={handleKeypress}
      tabIndex="0"
      theme-tooltip="Theme"
      className={style.container}
      id="toggle"
    >
      <input
        tabIndex="1"
        type="checkbox"
        className={style.togglecheckbox}
        checked={active}
        readOnly
        aria-label="theme"
      />
      <label htmlFor="toggle" className={style.togglelabel}></label>
    </div>
  );
}
