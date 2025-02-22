import React from "react";
import styles from "./styles/precaucion.module.css";

const Precaucion = ({
  titulo,
  parrafo,
}: {
  titulo: string;
  parrafo: string;
}) => {
  return (
    <div className={styles.precaucion}>
      <div className={styles.tituloPrecaucion}>
        <img
          className={styles.imagen}
          src="/precaucion.svg"
          alt="icono de precacucion"
        />
        <h4>{titulo}</h4>
      </div>
      <p>{parrafo}</p>
    </div>
  );
};

export default Precaucion;
