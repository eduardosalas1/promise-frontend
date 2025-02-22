import React from "react";
import styles from "./styles/eventosCuadros.module.css";

const EventosCuadros = () => {
  return (
    <div className={styles.EventosCuadros}>
      <div className={styles.cuadroAzul}>
        <div className={styles.fecha}>
          <h3>13</h3>
          <h6>JUN</h6>
        </div>
        <div className={styles.principalCuadroContent}>
          <div className={styles.tituloCuadro}>
            <h6>PRÓXIMOS EVENTOS</h6>
            <div className={styles.line}></div>
          </div>
          <h4>
            Activación de Campaña <br /> Maternal
          </h4>
        </div>
        <div className={styles.Icon}>
          <img src="/arrow-right-yellow.svg" className={styles.imgArrow} />
        </div>
      </div>
      <div className={styles.cuadroRosa}>
        <div className={styles.fecha}>
          <h3>25</h3>
          <h6>ABR</h6>
        </div>
        <div className={styles.principalCuadroContent}>
          <div className={styles.tituloCuadro}>
            <h6>PRÓXIMOS EVENTOS</h6>
            <div className={styles.line}></div>
          </div>
          <h4>
            Seminario de información <br /> para madres
          </h4>
        </div>
        <div className={styles.Icon}>
          <img src="/arrow-right-white.svg" className={styles.imgArrow} />
        </div>
      </div>
    </div>
  );
};

export default EventosCuadros;
