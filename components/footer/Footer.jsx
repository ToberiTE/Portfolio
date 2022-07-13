import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer} id="contact">
      <div className={style.container}>
        <h1 className={style.title}>Contact Info</h1>
        <div className={style.text}>
          <div>
            <i className="fas fa-envelope"></i>
            <a href="mailto:toberi@outlook.com">&emsp;toberi@outlook.com</a>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <a href="tel:+46706219593">&emsp;+46 706219593</a>
          </div>
        </div>
        <div className={style.socialwrapper}>
          <a
            className={style.links}
            href="https://github.com/ToberiTE"
            target="_blank"
            rel="noreferrer"
            data-tooltip="GitHub"
            aria-label="Github profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className={style.links}
            href="https://www.linkedin.com/in/toberi/"
            target="_blank"
            rel="noreferrer"
            data-tooltip="LinkedIn"
            aria-label="Linkedin profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className={style.links}
            href="https://codepen.io/toberite"
            target="_blank"
            rel="noreferrer"
            data-tooltip="Codepen"
            aria-label="Codepen profile"
          >
            <i className="fab fa-codepen"></i>
            <span></span>
          </a>
        </div>
        <div className={style.bottomtext}>
          <p>&#169; 2022 Tobias Eriksson</p>
        </div>
      </div>
    </div>
  );
}
