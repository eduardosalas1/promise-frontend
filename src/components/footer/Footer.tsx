import React from "react";
import styles from "./styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.promiseLogo}>
        <Image
          src="/promise-logo.svg"
          width={180}
          height={180}
          alt="Logo de promise"
        />
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li>Home</li>
          <li>
            <a href="#">Acerca de Promis</a>
          </li>
          <li>
            <a href="#">Investigadores</a>
          </li>
          <li>
            <a href="#">Hallazgos</a>
          </li>
          <li>
            <a href="#">Publicaciones</a>
          </li>
        </ul>
        <ul>
          <li>Actualidad PrOMIS</li>
        </ul>
        <ul>
          <li>Contacto</li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Linkdln</a>
          </li>
        </ul>
      </div>
      <div className={styles.form}>
        <p>Ingresa a nuestro formulario para ser parte de PrOMIS</p>
        <button>Formulario PrOMis</button>
      </div>
    </footer>
  );
};

export default Footer;
