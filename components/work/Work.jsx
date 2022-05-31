import style from "./Work.module.scss";
import Observer from "../Observer";

export default function Work() {
  return (
    <div className={style.work} id="work">
      <Observer>
        <div className={style.container}>
          <h2>Sample My Work</h2>
          <div className={style.wrapper}>
            <div className={style.card}>
              <div className={style.img}></div>
              <div className={style.body}>
                <h3 className={style.title}>Project 1</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.img}></div>
              <div className={style.body}>
                <h3 className={style.title}>Project 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ad repellat consectetur enim aliquid eos.
                </p>
              </div>
            </div>
            <div className={style.card}>
              <div className={style.img}></div>
              <div className={style.body}>
                <h3 className={style.title}>Project 3</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique maxime, animi aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Observer>
    </div>
  );
}
