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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button>Ver más +</button>
        </div>
      </div>
      <div className={styles.cuadro2}>
        <div className={styles.cuadro}>
          <h3>Weekly excursions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <button>Ver más +</button>
        </div>
      </div>
    </div>
  );
};

export default Publicaciones;
