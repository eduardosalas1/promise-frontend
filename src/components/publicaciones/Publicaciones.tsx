import React from "react";
import styles from "./styles/publicaciones.module.css";

const Publicaciones = () => {
  return (
    <div className={styles.publicaciones}>
      <div className={styles.cuadro1}>
        <div className={styles.cuadro}>
          <h3>
            Impacto de la violencia en la salud física y mental de las madres
            durante el embarazo
          </h3>

          <button>Ver más +</button>
        </div>
      </div>
      <div className={styles.cuadro2}>
        <div className={styles.cuadro}>
          <h3>
            Relación entre experiencias traumáticas y marcadores de estrés
            crónico en el embarazo
          </h3>

          <button>Ver más +</button>
        </div>
      </div>
      <div className={styles.cuadro3}>
        <div className={styles.cuadro}>
          <h3>
            Riesgos en el embarazo asociados con estrés crónico de la madre
          </h3>

          <button>Ver más +</button>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
