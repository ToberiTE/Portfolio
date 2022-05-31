import { useState } from "react";
import style from "./Card.module.scss";
import Image from "next/image";

export default function Card(props) {
  const handleClick = () => {
    setFlipped(!flipped);
  };
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${style.card} ${flipped ? style.flip : ""}`}
      onClick={handleClick}
    >
      <div className={style.front}>
        <Image src={props.image} layout="fill" className={style.img}></Image>
        <p className={style.title}>{props.title}</p>
      </div>
      <div className={style.back}>
        <p className={style.text}>{props.text}</p>
      </div>
    </div>
  );
}
