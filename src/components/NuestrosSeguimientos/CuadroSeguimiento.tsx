import React from "react";
import styles from "./css/NuestrosSeguimientos.module.css";

interface CuadroSeguimientoProps {
  titulo: string;
  fecha: string;
  icono: string;
  primerParrafo: string;
  segundoParrafo?: string;
  color?: string;
}

const CuadroSeguimiento = ({
  titulo,
  fecha,
  icono,
  primerParrafo,
  segundoParrafo,
  color,
}: CuadroSeguimientoProps) => {
  return (
    <div
      className={`${styles.cuadro} ${
        color === "azul"
          ? styles.azul
          : color === "amarillo"
          ? styles.amarillo
          : styles.rosado
      }`}
    >
      <div className={styles.encabezadoCuadro}>
        <div className={styles.tituloCuadro}>
          <h3>{titulo}</h3>
          <p>{fecha}</p>
        </div>
        <img
          src={icono}
          alt="Icono"
          className={color !== "rosado" ? styles.icono : styles.iconoRosado}
        />
      </div>
      <div className={styles.listaDiv}>
        <ul className={styles.lista}>
          <li className={styles.listaItem}>{primerParrafo}</li>
          {segundoParrafo && (
            <li className={styles.listaItem}>{segundoParrafo}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CuadroSeguimiento;
