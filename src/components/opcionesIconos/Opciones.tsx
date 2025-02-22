import React from "react";
import styles from "./styles/opciones.module.css";

const Opciones = () => {
  return (
    <div className={styles.agrupacion}>
      <div className={styles.Icono}>
        <img className={styles.iconoImagen} src="/salud_materna.svg" />
        <div className={styles.IconoFooter}>
          <h2 className={styles.iconoTitulo}>
            Salud Materna <br /> y Estrés
          </h2>
          <button>ver más +</button>
        </div>
      </div>
      <div className={styles.Icono}>
        <img
          className={styles.iconoImagenDesarrollo}
          src="/desarrollo_infantil.svg"
        />
        <div className={styles.IconoFooter}>
          <h2 className={styles.iconoTitulo}>
            Desarrollo y<br /> Salud Infantil
          </h2>
          <button>ver más +</button>
        </div>
      </div>
      <div className={styles.Icono}>
        <img
          className={styles.iconoImagenInnovacion}
          src="/innovacion_genetica.svg"
        />
        <div className={styles.IconoFooter}>
          <h2 className={styles.iconoTitulo}>
            Innovación y<br /> Genética
          </h2>
          <button>ver más +</button>
        </div>
      </div>
    </div>
  );
};

export default Opciones;
