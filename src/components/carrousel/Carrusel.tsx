"use client";

import React, { useState } from "react";
import styles from "./styles.css/carrusel.module.css";

const institutions = [
  { src: "/msh-logo.png", alt: "MGH" },
  { src: "/materno-perinatal.png", alt: "Materno perinatal" },
  { src: "/harvard-logo.png", alt: "Harvard" },
  { src: "/broad-logo.png", alt: "Broad" },
  { src: "/TU-logo.png", alt: "Technique" },
];

const Carrusel = () => {
  const [logos, setLogos] = useState(institutions);
  const [animationKey, setAnimationKey] = useState(0);

  const nextSlide = () => {
    setAnimationKey((prev) => prev + 1);
    setTimeout(() => {
      setLogos((prev) => [...prev.slice(1), prev[0]]);
    }, 300);
  };

  const prevSlide = () => {
    setAnimationKey((prev) => prev - 1);
    setTimeout(() => {
      setLogos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }, 300);
  };

  return (
    <div className={styles.carousel}>
      <h2 className={styles.title}>Instituciones Asociadas</h2>

      <div className={styles.carouselContainer}>
        <img
          className={styles.arrow}
          src="/arrow-left.svg"
          alt="flecha izquierda"
          onClick={prevSlide}
        />
        <div
          className={`${styles.imageContainer} ${styles.animated}`}
          key={animationKey}
        >
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
                  : styles.image
              }
            />
          ))}
        </div>
        <img
          className={styles.arrow}
          src="/arrow-right.svg"
          alt="flecha derecha"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Carrusel;
