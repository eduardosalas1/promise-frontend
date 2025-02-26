import React from "react";
import styles from "./styles/asociados.module.css";
import Image from "next/image";

const AsociadoComponente = ({
  src,
  bandera,
  titulo,
  parrafo,
  text_link,
  link,
}: {
  src: string;
  bandera: string;
  titulo: string;
  parrafo: string;
  text_link: string;
  link: string;
}) => {
  return (
    <div className={styles.asociadoComponente}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={src}
            width={259}
            height={163}
            alt="Institucion"
            className={styles.imagen}
          />
        </div>

        <div className={styles.textoContainer}>
          <div className={styles.tituloContainer}>
            <h3>{titulo}</h3>
            <img
              src={
                bandera === "peru" ? "/peru-bandera.svg" : "/usa_bandera.svg"
              }
              alt="bandera del perú"
              className={styles.imgBandera}
            />
          </div>
          <p>{parrafo}</p>
          <a href={link}>{text_link}</a>
        </div>
      </div>
    </div>
  );
};

export default AsociadoComponente;
