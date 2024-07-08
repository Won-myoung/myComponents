import { useState } from "react";
import styles from "./css/Toggle.module.css";

export default function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.ToggleText}>
      <button onClick={handleToggle}>{isOpen ? "Hide Text" : "Show Text"}</button>{" "}
      <div className={`${styles.textBox} ${isOpen ? styles.open : styles.closed}`}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere minima dignissimos doloribus vero sint rerum beatae obcaecati, pariatur saepe mollitia aliquam totam quis quam eius fuga asperiores sequi adipisci sunt?</p>
      </div>
    </div>
  );
}
