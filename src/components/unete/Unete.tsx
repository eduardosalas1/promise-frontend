import React from "react";
import styles from "./styles/unete.module.css";

const Unete = () => {
  return (
    <div className={styles.componente}>
      <p>
        &quot;Únete a nuestra misión de transformar <br /> vidas con ciencia y
        compromiso.&quot;
      </p>
      <div className={styles.botonera}>
        <button className={styles.botonAzul}>Formulario PrOMIS</button>
        <button className={styles.botonGris}>Contáctanos</button>
      </div>
    </div>
  );
};

export default Unete;
