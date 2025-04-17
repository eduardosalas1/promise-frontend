"use client";

import React from "react";
import styles from "./styles.css/carrusel.module.css";

const institutions = [
  // { src: "/msh-logo.png", alt: "MGH" },
  { src: "/materno-perinatal.png", alt: "Materno perinatal" },
  { src: "/harvard-logo.png", alt: "Harvard" },
  // { src: "/broad-logo.png", alt: "Broad" },
  // { src: "/TU-logo.png", alt: "Technique" },
];

const Carrusel = () => {
  const logos = institutions;
  return (
    <div className={styles.carousel}>
      <h2 className={styles.title}>Instituciones Encargadas</h2>

      <div className={styles.carouselContainer}>
        {/* <img
          className={styles.arrow}
          src="/arrow-left.svg"
          alt="flecha izquierda"
          onClick={prevSlide}
        /> */}
        <div className={styles.imageContainer}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={
                logo.alt === "MGH"
                  ? styles.imageMGH
                  : logo.alt === "Materno perinatal"
                  ? styles.imageMaterno
                  : logo.alt === "Harvard"
                  ? styles.imageHarvard
                  : styles.image
              }
            />
          ))}
        </div>
        {/* <img
          className={styles.arrow}
          src="/arrow-right.svg"
          alt="flecha derecha"
          onClick={nextSlide}
        /> */}
      </div>
    </div>
  );
};

export default Carrusel;
