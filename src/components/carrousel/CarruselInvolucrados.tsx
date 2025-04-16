"use client";

import React, { useState } from "react";
import styles from "./styles.css/carrusel.module.css";

const institutions = [
  { src: "/TU-logo.png", alt: "Technique" },
  { src: "/broad-logo.png", alt: "Broad" },
  { src: "/Bristol.png", alt: "MGH" },
];

const CarruselInvolucrados = () => {
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
    <div className={styles.involucradosCarrusel}>
      <img
        className={styles.arrowInvolucrados}
        src="/arrow-left.svg"
        alt="flecha izquierda"
        onClick={prevSlide}
      />
      <div
        className={`${styles.InvolucradosimageContainer} ${styles.animated}`}
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
        className={styles.arrowInvolucrados}
        src="/arrow-right.svg"
        alt="flecha derecha"
        onClick={nextSlide}
      />
    </div>
  );
};

export default CarruselInvolucrados;
