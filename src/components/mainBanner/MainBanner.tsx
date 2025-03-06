import React from "react";
import styles from "./styles/mainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainComponente}>
        <h2>
          “Estudio prenatal
          <br /> longitudinal de madres
          <br /> y niños en Perú
        </h2>
        <button>Conoce nuestra historia</button>
      </div>
      <div className={styles.mainFooter}>
        <p>5000 Madres Participantes</p>
        <div className={styles.line}></div>
        <p>+ de 11 años de estudio</p>
      </div>
    </div>
  );
};

export default MainBanner;
