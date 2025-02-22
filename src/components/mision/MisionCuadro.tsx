import React from "react";
import styles from "./styles/misionCuadro.module.css";

const MisionCuadro = ({
  titulo,
  eslogan,
  parrafo,
}: {
  titulo: string;
  eslogan: string;
  parrafo: string;
}) => {
  return (
    <div className={styles.content}>
      <h4 className={titulo === "MISIÓN" ? styles.yellow : styles.pink}>
        *{titulo}
      </h4>
      <h2>&quot;{eslogan}&quot;</h2>
      <p>{parrafo}</p>
    </div>
  );
};

export default MisionCuadro;
