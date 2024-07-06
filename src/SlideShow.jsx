import React, { useEffect } from "react";
import styles from "./css/SlideShow.module.css";

export default function SlideShow() {
  useEffect(() => {
    const articles = document.querySelectorAll(`.${styles.article}`);

    const articleObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.3 }
    );

    articles.forEach((article) => {
      articleObserver.observe(article);
    });

    const delays = document.querySelectorAll(`.${styles.delay}`);

    delays.forEach((delay) => {
      const delayTime = delay.getAttribute("data-delay");
      delay.style.animationDelay = `${delayTime}s`;
    });

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      articles.forEach((article) => {
        articleObserver.unobserve(article);
      });
    };
  }, []);

  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <p className={styles.text}>
          Aspernatur, blanditiis consequatur! Accusamus nulla omnis maxime ea praesentium, magni, vel, molestias ducimus quibusdam voluptatibus qui corporis debitis repudiandae rerum voluptatum quod. Odit illum asperiores consequuntur iusto
          consectetur, cum voluptas! Quas asperiores, atque pariatur maxime quam, in et nostrum praesentium obcaecati illo temporibus! Aliquam necessitatibus voluptate earum dolorum blanditiis autem architecto, odit optio debitis natus dicta modi ut
          vel ducimus.
        </p>
      </article>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <h2 className={styles.title}>
          <span className={`${styles.letter} ${styles.delay}`} data-delay="0.3">
            Hello, There!
          </span>
        </h2>
        <h2 className={styles.title}>
          <span className={`${styles.letter} ${styles.delay}`} data-delay="0.6">
            Hello, There!
          </span>
        </h2>
      </article>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <p className={styles.text}>
          Aspernatur, blanditiis consequatur! Accusamus nulla omnis maxime ea praesentium, magni, vel, molestias ducimus quibusdam voluptatibus qui corporis debitis repudiandae rerum voluptatum quod. Odit illum asperiores consequuntur iusto
          consectetur, cum voluptas! Quas asperiores, atque pariatur maxime quam, in et nostrum praesentium obcaecati illo temporibus! Aliquam necessitatibus voluptate earum dolorum blanditiis autem architecto, odit optio debitis natus dicta modi ut
          vel ducimus.
        </p>
      </article>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <p className={styles.text}>
          Aspernatur, blanditiis consequatur! Accusamus nulla omnis maxime ea praesentium, magni, vel, molestias ducimus quibusdam voluptatibus qui corporis debitis repudiandae rerum voluptatum quod. Odit illum asperiores consequuntur iusto
          consectetur, cum voluptas! Quas asperiores, atque pariatur maxime quam, in et nostrum praesentium obcaecati illo temporibus! Aliquam necessitatibus voluptate earum dolorum blanditiis autem architecto, odit optio debitis natus dicta modi ut
          vel ducimus.
        </p>
      </article>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <h2 className={styles.title}>
          <span className={`${styles.letter} ${styles.delay}`} data-delay="0.3">
            Hello, There!
          </span>
        </h2>
        <h2 className={styles.title}>
          <span className={`${styles.letter} ${styles.delay}`} data-delay="0.6">
            Hello, There!
          </span>
        </h2>
        <h2 className={styles.title}>
          <span className={`${styles.letter} ${styles.delay}`} data-delay="0.9">
            Hello, There!
          </span>
        </h2>
      </article>
      <article className={styles.article}>
        <h2 className={styles.title}>
          <span className={styles.letter}>Hello, There!</span>
        </h2>
        <p className={styles.text}>
          Aspernatur, blanditiis consequatur! Accusamus nulla omnis maxime ea praesentium, magni, vel, molestias ducimus quibusdam voluptatibus qui corporis debitis repudiandae rerum voluptatum quod. Odit illum asperiores consequuntur iusto
          consectetur, cum voluptas! Quas asperiores, atque pariatur maxime quam, in et nostrum praesentium obcaecati illo temporibus! Aliquam necessitatibus voluptate earum dolorum blanditiis autem architecto, odit optio debitis natus dicta modi ut
          vel ducimus.
        </p>
      </article>
    </section>
  );
}
