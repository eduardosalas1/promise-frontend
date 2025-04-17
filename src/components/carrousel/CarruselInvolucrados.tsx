"use client";

// import React, { useState } from "react";
import styles from "./styles.css/carrusel.module.css";

const institutions = [
  { src: "/TU-logo.png", alt: "Technique" },
  { src: "/broad-logo.png", alt: "Broad" },
  { src: "/Bristol.png", alt: "MGH" },
];

const CarruselInvolucrados = () => {
  const logos = institutions;
  const animationKey = 0;

  // const nextSlide = () => {
  //   setAnimationKey((prev) => prev + 1);
  //   setTimeout(() => {
  //     setLogos((prev) => [...prev.slice(1), prev[0]]);
  //   }, 300);
  // };

  // const prevSlide = () => {
  //   setAnimationKey((prev) => prev - 1);
  //   setTimeout(() => {
  //     setLogos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  //   }, 300);
  // };

  return (
    <div className={styles.involucradosCarrusel}>
      {/* <img
        className={styles.arrowInvolucrados}
        src="/arrow-left.svg"
        alt="flecha izquierda"
        onClick={prevSlide}
      /> */}
      <div
        className={`${styles.InvolucradosimageContainer} ${styles.animated}`}
        key={animationKey}
      >
        {logos.map((logo, index) => (
          <div className={styles.imageUniversities} key={index}>
            <img
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

            <div className={styles.lineaPloma}></div>

            <p>
              {logo.alt === "Technique"
                ? "Diversidad en los patrones de metilacion del ADN entre poblaciones y riesgo diferencial de enfermedades"
                : logo.alt === "Broad"
                ? "Biomarcadores de estres cronico"
                : logo.alt === "MGH"
                ? "Marcadores metabolomicos e inmunitarios asociados con problemas de salud mental y del embarazo."
                : ""}
            </p>
          </div>
        ))}
      </div>
      {/* <img
        className={styles.arrowInvolucrados}
        src="/arrow-right.svg"
        alt="flecha derecha"
        onClick={nextSlide}
      /> */}
    </div>
  );
};

export default CarruselInvolucrados;
