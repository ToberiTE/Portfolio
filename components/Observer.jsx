import { useState, useEffect, useRef } from "react";

export default function Observer(props) {
  const [visible, setVisible] = useState(false);
  const observeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([el]) => {
        el.isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    const { current } = observeRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [observeRef]);
  return (
    <>
      <div ref={observeRef}></div>
      <div className={`hidden ${visible ? "visible" : ""}`}>
        {props.children}
      </div>
    </>
  );
}
