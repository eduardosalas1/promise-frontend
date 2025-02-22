import React from "react";
import styles from "./styles/datos.module.css";

const Datos = () => {
  return (
    <div className={styles.datosContent}>
      <p className={styles.datostitulo}>+ DATOS PROMIS</p>
      <div className={styles.datosBody}>
        <h2>
          *Logros
          <br /> que nos
          <br /> destacan.
        </h2>
        <div className={styles.datosCuadros}>
          <div className={styles.cuadroAzul}>
            <h2>+15</h2>{" "}
            <p>
              años de
              <br /> investigación
            </p>
          </div>
          <div className={styles.lowCuadros}>
            <div className={styles.cuadroAmarillo}>
              <p>Participaron</p>
              <h2>*5000</h2>
              <p>madres</p>
            </div>
            <div className={styles.cuadroRosado}>
              <h2>"50</h2>
              <p>estudios</p>
              <p>publicados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datos;
