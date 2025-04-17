import React from "react";
import styles from "./styles/actualidad.module.css";

const Actualidad = () => {
  return (
    <div className={styles.cuadroActualidad}>
      <div className={styles.textoActualidad}>
        <h4>
          + AVANCES Y <br /> SEGUIMIENTOS
        </h4>
        <h2>Soy Participante</h2>
        <p>
          &quot;Si ha participado en PrOMIS cuando estaba embarazada y se
          atendía en el Instituto Nacional Materno Perinatal, conocido como La
          Maternidad de Lima, puedes ver aspectos que le interesen sobre su
          participación y futuros seguimientos.&quot;
        </p>
        <button>Ver seguimientos</button>
      </div>
      <div>
        <img
          className={styles.textoImagen}
          src="/foto_soy_participante_home_2.jpg"
          alt="Chica embarazada agarrandose la barriga en forma de corazon"
        />
      </div>
    </div>
  );
};

export default Actualidad;
