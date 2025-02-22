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
        <a href="#">Acerca de PrOMIS</a>
        <a href="#">Investigadores e Instituciones</a>
        <a href="./publicaciones">Hallazgos</a>
        <a href="./contacto">Contacto</a>
      </ul>
      <button>Actualidad PrOMIS</button>
    </nav>
  );
};

export default NavBar;
