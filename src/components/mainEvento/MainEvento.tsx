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
            &quot;Apoyando a<br /> madres y niños ,<br /> construyendo su
            <br /> futuro.&quot;
          </h2>
          <p>
            Conoce los estudios que están
            <br /> marcando una diferencia en la
            <br /> salud de mujeres y niños en Perú.
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
