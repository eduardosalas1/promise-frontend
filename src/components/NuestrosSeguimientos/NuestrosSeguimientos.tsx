import React from "react";
import styles from "./css/NuestrosSeguimientos.module.css";
import Seguimientos from "./Seguimientos";

const NuestrosSeguimientos = () => {
  return (
    <div>
      <div className={styles.encabezadoSeguimiento}>
        <h2>
          Nuestros <br /> Seguimientos
        </h2>
        <p>
          PrOMIS, inició la invitación a las madres gestantes <br /> que se
          atendían en el Instituto Nacional Materno <br /> Perinatal desde el
          año 2012:
        </p>
      </div>

      <Seguimientos />
    </div>
  );
};

export default NuestrosSeguimientos;
