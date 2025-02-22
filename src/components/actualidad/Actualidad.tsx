import React from "react";
import styles from "./styles/actualidad.module.css";

const Actualidad = () => {
  return (
    <div className={styles.cuadroActualidad}>
      <div className={styles.textoActualidad}>
        <h4>
          + AVANCES Y <br /> SEGUIMIENTOS
        </h4>
        <h2>Actualidad PrOMIS</h2>
        <p>
          &quot;A lo largo de tres etapas de seguimiento, PrOMIS ha recopilado
          información valiosa sobre cómo el entorno materno influye en el
          desarrollo infantil. Conoce los avances de cada fase y las
          contribuciones clave de nuestros colaboradores.&quot;
        </p>
        <button>Ver avances</button>
      </div>
      <div>
        <img
          className={styles.textoImagen}
          src="/embarazo_corazon.jpg"
          alt="Chica embarazada agarrandose la barriga en forma de corazon"
        />
      </div>
    </div>
  );
};

export default Actualidad;
