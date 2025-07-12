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
  link?: string;
}) => {
  return (
    <div className={styles.asociadoComponente}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={src}
            width={src === "/NIH.png" ? 210 : 259}
            height={src === "/NIH.png" ? 120 : 163}
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
          {/* {src === "/NIH.png" ? null : <a href={link}>{text_link}</a>} */}

          {src === "/NIH.png" ? (
            <>
              <div className={styles.line}></div>
              <div className={styles.nihLow}>
                <p>
                  NICHD: Eunice Kennedy National <br /> Institute if child
                  Health and Human <br /> Development National of HEalth, Grant{" "}
                  <br />
                  #R21HD102822, R01HD102342
                </p>
                <p>
                  NIMH: National Institute of
                  <br /> Mental Health. Grant #R21MH12
                </p>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AsociadoComponente;
