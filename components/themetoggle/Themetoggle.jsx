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
  }, []);
  return (
    <div className={style.container}>
      <input
        type="checkbox"
        id="toggle"
        className={style.togglecheckbox}
        onClick={clickHandler}
        onKeyUp={handleKeypress}
        checked={active}
        readOnly
        aria-label="Toggle theme"
      />
      <label htmlFor="toggle" className={style.togglelabel}></label>
    </div>
  );
}
