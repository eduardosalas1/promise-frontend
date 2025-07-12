"use client";
import React, { useState } from "react";
import styles from "./styles/cuadroInformativo.module.css";
import Hallazgos from "../hallazgos/Hallazgos";

const CuadroInformativo = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Salud Maternal y Estres"
  );
  return (
    // <div className={styles.mainCuadro}>
    //   <Hallazgos imagen="/madre_panza.jpg" titulo="Salud Materna y estrés" />
    //   <Hallazgos
    //     imagen="/mujer_hijo.jpg"
    //     titulo="Desarrollo y salud infantil"
    //   />
    //   <Hallazgos imagen="/bebe_lactando.jpg" titulo="Innovación genómica" />
    // </div>
    <div>
      <div className={styles.opciones}>
        <div className={styles.blueOptions}>
          <div
            className={
              selectedOption === "Salud Maternal y Estres"
                ? styles.blueOptionActiva
                : styles.blueOptionInactiva
            }
            onClick={(e: any) => setSelectedOption("Salud Maternal y Estres")}
          >
            Salud Maternal y Estres
          </div>
          <div
            className={
              selectedOption === "Desarrollo y salud Infantil"
                ? styles.blueOptionActiva
                : styles.blueOptionInactiva
            }
            onClick={(e: any) =>
              setSelectedOption("Desarrollo y salud Infantil")
            }
          >
            Desarrollo y salud Infantil
          </div>
          <div
            className={
              selectedOption === "Innovación Genómica"
                ? styles.blueOptionActiva
                : styles.blueOptionInactiva
            }
            onClick={(e: any) => setSelectedOption("Innovación Genómica")}
          >
            Innovación genómica
          </div>
        </div>
        <div className={styles.blueLine}></div>
      </div>
      <div className={styles.informacionCuadro}>
        {selectedOption === "Salud Maternal y Estres" && (
          <div className={styles.informacion}>
            <div>
              <img className={styles.iconoImagen} src="/salud_materna.svg" />
            </div>
            <div className={styles.textoInformacion}>
              <div>
                Chen Y, Künzel RG, Sanchez SE, Rondon MB, Pinto NI, Sanchez E,
                Kirschbaum C, Valeri L, Koenen KC, Gelaye B. The association
                between pre-pregnancy and first-trimester hair cortisol and
                preterm birth: a causal inference model. Eur J Epidemiol. 2024
                Dec;39(12):1391-1400. doi: 10.1007/s10654-024-01174-w. Epub 2024
                Dec 11. PMID: 39661097; PMCID: PMC11680651. Zhong QY, Wells A,
                Rondon MB, Williams MA, Barrios YV, Sanchez SE, Gelaye B.
                Childhood abuse and suicidal ideation in a cohort of pregnant
                Peruvian women. Am J Obstet Gynecol. 2016 Oct;215(4):501.e1-8.
                doi: 10.1016/j.ajog.2016.04.052. Epub 2016 May 10. PMID:
                27173085; PMCID: PMC5045776. Sanchez SE, Pineda O, Chaves DZ,
                Zhong QY, Gelaye B, Simon GE, Rondon MB, Williams MA. Childhood
                physical and sexual abuse experiences associated with
                post-traumatic stress disorder among pregnant women. Ann
                Epidemiol. 2017 Nov;27(11):716-723.e1. doi:
                10.1016/j.annepidem.2017.09.012. Epub 2017 Oct 13. PMID:
                29079333; PMCID: PMC5820025.
              </div>
              <div>
                <img src="/madre_panza.jpg" className={styles.imgContent} />
              </div>
            </div>
          </div>
        )}

        {selectedOption === "Desarrollo y salud Infantil" && (
          <>
            <div>
              <img
                className={styles.iconoImagenDesarrollo}
                src="/desarrollo_infantil.svg"
              />
            </div>
            <div></div>
          </>
        )}

        {selectedOption === "Innovación Genómica" && (
          <div>
            <img
              className={styles.iconoImagenInnovacion}
              src="/innovacion_genetica.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CuadroInformativo;
