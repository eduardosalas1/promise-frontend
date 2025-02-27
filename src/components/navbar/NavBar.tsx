import React from "react";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.mainLogo}>PrOMIS</span>
        <span className={styles.subLogo} id="subLogo">
          MADRES SANAS.HIJOS SANOS
        </span>
      </div>
      <ul>
        <a href="./">Inicio</a>
        <a href="./acerca">Acerca de PrOMIS</a>
        <a href="./investigadores_e_instituciones">
          Investigadores e Instituciones
        </a>
        <a href="./publicaciones">Hallazgos</a>
        <a href="./contacto">Contacto</a>
      </ul>
      <a href="./actualidad" className={styles.boton}>
        Actualidad PrOMIS
      </a>
    </nav>
  );
};

export default NavBar;
