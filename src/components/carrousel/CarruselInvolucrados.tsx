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

  return (
    <div className={styles.involucradosCarrusel}>
      <div className={styles.InvolucradosimageContainer}>
        {logos.map((logo, index) => (
          <div className={styles.imageUniversities} key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className={
                logo.alt === "MGH"
                  ? styles.imageMGH
                  : logo.alt === "Broad"
                  ? styles.imageBroad
                  : logo.alt === "Technique"
                  ? styles.imageTechnique
                  : styles.imageUniversities
              }
            />

            <div className={styles.lineaPloma}></div>

            {logo.alt === "Technique" ? (
              <p>
                Diversidad en los patrones de metilación del ADN entre
                poblaciones y riesgo diferencial de enfermedades
              </p>
            ) : logo.alt === "Broad" ? (
              <p>
                Biomarcadores de <br /> estrés cronico
              </p>
            ) : logo.alt === "MGH" ? (
              <p>
                Marcadores metabólicos e inmunitarios asociados con problemas de
                salud mental y del embarazo.
              </p>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselInvolucrados;
