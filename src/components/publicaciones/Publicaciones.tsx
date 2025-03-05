import React from "react";
import styles from "./styles/publicaciones.module.css";

const Publicaciones = () => {
  return (
    <div className={styles.publicaciones}>
      <div className={styles.cuadro1}>
        <div className={styles.cuadro}>
          <h3>
            Mission smile 1k:
            <br />
            Outdoor charity
          </h3>
          <p>
            Impacto de la violencia en la salud física y mental de las madres
            durante el embarazo
          </p>
          <button>Ver más +</button>
        </div>
      </div>
      <div className={styles.cuadro2}>
        <div className={styles.cuadro}>
          <h3>Weekly excursions</h3>
          <p>
            Relación entre experiencias traumáticas y marcadores de estrés
            crónico en el embarazo
          </p>
          <button>Ver más +</button>
        </div>
      </div>
      <div className={styles.cuadro3}>
        <div className={styles.cuadro}>
          <h3>
            Monthly public
            <br />
            awareness
          </h3>
          <p>Riesgos en el embarazo asociados con estrés crónico de la madre</p>
          <button>Ver más +</button>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
