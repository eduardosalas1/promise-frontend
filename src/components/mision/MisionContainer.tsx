import React from "react";
import styles from "./styles/mision.module.css";
import MisionCuadro from "./MisionCuadro";

const MisionContainer = () => {
  return (
    <div className={styles.Container}>
      <MisionCuadro
        titulo="MISIÓN"
        eslogan="Investigación con propósito, impacto y compromiso social."
        parrafo="Nos dedicamos a generar conocimiento científico que inspire cambios significativos en políticas y prácticas de salud materno-infantil, con un enfoque ético, riguroso y humano."
      />
      <MisionCuadro
        titulo="VISIÓN"
        eslogan="Transformando vidas a través del conocimiento científico."
        parrafo="Aspiramos a ser líderes globales en investigación sobre salud materno-infantil, desarrollando soluciones innovadoras y sostenibles que impacten positivamente en las comunidades más vulnerables."
      />
    </div>
  );
};

export default MisionContainer;
