import React from "react";
import styles from "./styles/cuadroInformativo.module.css";
import Hallazgos from "../hallazgos/Hallazgos";

const CuadroInformativo = () => {
  return (
    <div className={styles.mainCuadro}>
      <Hallazgos imagen="/madre_panza.jpg" titulo="Investigación 01" />
      <Hallazgos imagen="/mujer_hijo.jpg" titulo="Investigación 02" />
      <Hallazgos
        imagen="/bebe_lactando.jpg"
        titulo="Investigación e Indagación 03"
      />
    </div>
  );
};

export default CuadroInformativo;
