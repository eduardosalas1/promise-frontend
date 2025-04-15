import React from "react";
import styles from "./styles/problemaCuadros.module.css";
import CuadroAzul from "./CuadroAzul";

const ProblemaCuadros = () => {
  return (
    <div className={styles.problema}>
      <CuadroAzul
        titulo="Riesgo de parto prematuro"
        parrafo="Cómo el abuso afecta la salud física y mental durante el embarazo"
      />
      <CuadroAzul
        titulo="Desarrollo Infantil"
        parrafo="Impactos del estrés en el crecimiento y el comportamiento de los niños y niñas."
      />
      <CuadroAzul
        titulo="Relación madre/hijo(a)"
        parrafo="Calidad del vínculo y su relación con la salud emocional y biológica del hijo."
      />
    </div>
  );
};

export default ProblemaCuadros;
