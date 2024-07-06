import React, { useEffect } from "react";
import styles from "./css/ScrollWheel.module.css";

export default function ScrollWheel() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const sections = document.querySelectorAll(`.${styles.section}`);
      const currentSection = document.querySelector(`.${styles.section}.${styles.current}`);

      if (!currentSection) return;

      let newIndex = Array.from(sections).indexOf(currentSection) + (delta > 0 ? 1 : -1);

      if (newIndex >= 0 && newIndex < sections.length) {
        sections[newIndex].scrollIntoView({ behavior: "smooth" });
        currentSection.classList.remove(styles.current);
        sections[newIndex].classList.add(styles.current);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div className={`${styles.section} ${styles.current}`}>Section 1</div>
      <div className={styles.section}>Section 2</div>
      <div className={styles.section}>Section 3</div>
      <div className={styles.section}>Section 4</div>
      <div className={styles.section}>Section 5</div>
    </div>
  );
}
