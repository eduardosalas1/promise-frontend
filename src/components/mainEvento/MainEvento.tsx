import React from "react";
import styles from "./styles/mainEvento.module.css";
import CuadroInformativo from "../cuadroInformativo/CuadroInformativo";

const MainEvento = () => {
  return (
    <div className={styles.mainEvento}>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h3>* HALLAZGOS CONSTANTES</h3>
          <h2>
            "Apoyando a madres y<br /> niños, construyendo
            <br /> su futuro."
          </h2>
          <p>
            Conoce los estudios que están marcando <br />
            una diferencia en la salud de mujeres y niños en Perú.
          </p>
          <button>Ver ultimo hallazgo +</button>
        </div>
        <div className={styles.cuadro}>
          <CuadroInformativo />
        </div>
      </div>
    </div>
  );
};

export default MainEvento;
