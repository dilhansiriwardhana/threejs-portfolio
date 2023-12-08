import React, { useEffect, useRef, useState } from "react";

import styles from "./Slide.module.css";

const Slide = () => {
  const [isShown, setIsShown] = useState(false);

  const wrapperRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    observer.observe(wrapperRef.current);
  }, []);

  const translateX = isShown ? "0%" : "100%";

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{ transform: `translateX(${translateX})` }}
      >
        👻
      </div>
    </div>
  );
};

export default Slide;
