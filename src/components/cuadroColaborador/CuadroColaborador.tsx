import React from "react";
import styles from "./styles/cuadroColaborador.module.css";
import Image from "next/image";

const CuadroColaborador = ({
  src,
  nombre,
  profesion,
  texto_link,
  link,
  color,
  posicion,
}: {
  src: string;
  nombre: string;
  profesion: string;
  texto_link: string;
  link: string;
  color: string;
  posicion: string;
}) => {
  return (
    <div className={styles.allCuadro}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          height={320}
          width={310}
          alt="Imagen de colaborador"
          className={styles.cuadro}
        />

        <Image
          src={
            color === "azul"
              ? "/cruz_azul.svg"
              : color === "rosado"
              ? "/cruz_rosada.svg"
              : "/cruz_amarilla.svg"
          }
          alt="Añadir"
          width={90}
          height={90}
          className={
            posicion === "arriba"
              ? styles.iconoCruzArriba
              : styles.iconoCruzAbajo
          }
        />
      </div>
      <div className={styles.informacion}>
        <h4>{nombre}</h4>
        <p>{profesion}</p>
        <a href={link} target="_blank">
          {texto_link}
        </a>
      </div>
    </div>
  );
};

export default CuadroColaborador;
