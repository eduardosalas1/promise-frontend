import React from "react";
import styles from "./styles/cuadroInformativo.module.css";
import Hallazgos from "../hallazgos/Hallazgos";

const CuadroInformativo = () => {
  return (
    <div className={styles.mainCuadro}>
      <Hallazgos imagen="/madre_panza.jpg" titulo="Salud Materna y estrés" />
      <Hallazgos
        imagen="/mujer_hijo.jpg"
        titulo="Desarrollo y salud infantil"
      />
      <Hallazgos imagen="/bebe_lactando.jpg" titulo="Innovación genómica" />
    </div>
  );
};

export default CuadroInformativo;
