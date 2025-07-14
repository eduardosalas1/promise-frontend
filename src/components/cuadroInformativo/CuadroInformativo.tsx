"use client";
import React, { useState } from "react";
import styles from "./styles/cuadroInformativo.module.css";

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
            onClick={() => setSelectedOption("Salud Maternal y Estres")}
          >
            Salud Maternal y Estres
          </div>
          <div
            className={
              selectedOption === "Desarrollo y salud Infantil"
                ? styles.blueOptionActiva
                : styles.blueOptionInactiva
            }
            onClick={() => setSelectedOption("Desarrollo y salud Infantil")}
          >
            Desarrollo y salud Infantil
          </div>
          <div
            className={
              selectedOption === "Innovación Genómica"
                ? styles.blueOptionActiva
                : styles.blueOptionInactiva
            }
            onClick={() => setSelectedOption("Innovación Genómica")}
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
                <ul>
                  <li>
                    Chen Y, Künzel RG, Sanchez SE, Rondon MB, Pinto NI, Sanchez
                    E, Kirschbaum C, Valeri L, Koenen KC, Gelaye B. The
                    association between pre-pregnancy and first-trimester hair
                    cortisol and preterm birth: a causal inference model. Eur J
                    Epidemiol. 2024 Dec;39(12):1391-1400. doi:
                    10.1007/s10654-024-01174-w. Epub 2024 Dec 11. PMID:
                    39661097; PMCID: PMC11680651.
                  </li>
                  <li>
                    Zhong QY, Wells A, Rondon MB, Williams MA, Barrios YV,
                    Sanchez SE, Gelaye B. Childhood abuse and suicidal ideation
                    in a cohort of pregnant Peruvian women. Am J Obstet Gynecol.
                    2016 Oct;215(4):501.e1-8. doi: 10.1016/j.ajog.2016.04.052.
                    Epub 2016 May 10. PMID: 27173085; PMCID: PMC5045776.
                  </li>
                  <li>
                    Sanchez SE, Pineda O, Chaves DZ, Zhong QY, Gelaye B, Simon
                    GE, Rondon MB, Williams MA. Childhood physical and sexual
                    abuse experiences associated with post-traumatic stress
                    disorder among pregnant women. Ann Epidemiol. 2017
                    Nov;27(11):716-723.e1. doi: 10.1016/j.annepidem.2017.09.012.
                    Epub 2017 Oct 13. PMID: 29079333; PMCID: PMC5820025.
                  </li>
                </ul>
              </div>
              <div>
                <img src="/madre_panza.jpg" className={styles.imgContent} />
              </div>
              <a href="" target="_blank" className={styles.link}>
                Ver más +
              </a>
            </div>
          </div>
        )}

        {selectedOption === "Desarrollo y salud Infantil" && (
          <div className={styles.informacion}>
            <div>
              <img
                className={styles.iconoImagenDesarrollo}
                src="/desarrollo_infantil.svg"
              />
            </div>
            <div className={styles.textoInformacion}>
              <div>
                <li>
                  Sanchez SE, Puente GC, Atencio G, Qiu C, Yanez D, Gelaye B,
                  Williams MA. Risk of spontaneous preterm birth in relation to
                  maternal depressive, anxiety, and stress symptoms. J Reprod
                  Med. 2013 Jan-Feb;58(1-2):25-33. PMID: 23447915; PMCID:
                  PMC3662498.
                </li>
                <li>
                  Gelaye B, Domingue A, Rebelo F, Friedman LE, Qiu C, Sanchez
                  SE, Larrabure-Torrealva G, Williams MA. Association of
                  antepartum suicidal ideation during the third trimester with
                  infant birth weight and gestational age at delivery. Psychol
                  Health Med. 2019 Feb;24(2):127-136. doi:
                  10.1080/13548506.2018.1539235. Epub 2018 Oct 31. PMID:
                  30376725; PMCID: PMC6289591.
                </li>
              </div>
              <div>
                <img src="/madre_hijo.jpg" className={styles.imgContent} />
              </div>
              <a href="" target="_blank" className={styles.link}>
                Ver más +
              </a>
            </div>
          </div>
        )}

        {selectedOption === "Innovación Genómica" && (
          <div className={styles.informacion}>
            <div>
              <img
                className={styles.iconoImagenInnovacion}
                src="/innovacion_genetica.svg"
              />
            </div>
            <div className={styles.textoInformacion}>
              <div>
                <li>
                  Shen H, Gelaye B, Huang H, Rondon MB, Sanchez S, Duncan LE.
                  Polygenic prediction and GWAS of depression, PTSD, and
                  suicidal ideation/self-harm in a Peruvian cohort.
                  Neuropsychopharmacology. 2020 Sep;45(10):1595-1602. doi:
                  10.1038/s41386-020-0603-5. Epub 2020 Jan 11. PMID: 31926482;
                  PMCID: PMC7419528.
                </li>
                <li>
                  Mitro SD, Larrabure-Torrealva GT, Sanchez SE, Molsberry SA,
                  Williams MA, Clish C, Gelaye B. Metabolomic markers of
                  antepartum depression and suicidal ideation. J Affect Disord.
                  2020 Feb 1;262:422-428. doi: 10.1016/j.jad.2019.11.061. Epub
                  2019 Nov 11. PMID: 31744743; PMCID: PMC6917910.
                </li>
              </div>
              <div>
                <img src="/bebe_lactando.jpg" className={styles.imgContent} />
              </div>
              <a href="" target="_blank" className={styles.link}>
                Ver más +
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuadroInformativo;
