import Carousel from "react-bootstrap/Carousel";
import React from "react";
import styles from "./css/CrossFade.module.css";
// import ExampleCarouselImage from "./components/ExampleCarouselImage";

/* import slide1 from "./public/CrossFade/CrossFade01.jpg";
import slide2 from "./public/CrossFade/CrossFade02.jpg";
import slide3 from "./public/CrossFade/CrossFade03.jpg"; */

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.bodyWrap}>
        <img className={styles.dBlock} src="/CrossFade/CrossFade01.jpg" alt="First slide" />
        <Carousel.Caption className={styles.bodyText}>
          <h3>1 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.bodyWrap}>
        <img className={styles.dBlock} src="/CrossFade/CrossFade02.jpg" alt="2 slide" />
        <Carousel.Caption className={styles.bodyText}>
          <h3>2 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.bodyWrap}>
        <img className={styles.dBlock} src="/CrossFade/CrossFade03.jpg" alt="3 slide" />
        <Carousel.Caption className={styles.bodyText}>
          <h3>3 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
