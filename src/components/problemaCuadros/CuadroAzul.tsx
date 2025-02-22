import React from "react";
import styles from "./styles/cuadroAzul.module.css";

const CuadroAzul = ({
  titulo,
  parrafo,
}: {
  titulo: string;
  parrafo: string;
}) => {
  return (
    <div className={styles.cuadro}>
      <div>
        <h3>{titulo}</h3>
      </div>
      <div>
        <p>{parrafo}</p>
      </div>
    </div>
  );
};

export default CuadroAzul;
