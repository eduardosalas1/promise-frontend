import React from "react";
import styles from "@/styles/acerca.module.css";
import Unete from "@/components/unete/Unete";
import ProblemaCuadros from "@/components/problemaCuadros/ProblemaCuadros";
import DatosConciencia from "@/components/datosConciencia/DatosConciencia";
import Image from "next/image";
import MisionContainer from "@/components/mision/MisionContainer";

const page = () => {
  return (
    <div>
      <div className={styles.primerBanner}>
        <p className={styles.historiaTitulo}>+ ¿QUIENES SOMOS?</p>
        <div className={styles.primerContent}>
          <h2>
            &quot;Comprendiendo cómo el entorno materno influye en el futuro de
            nuestros niños&quot;.
          </h2>
          <div className={styles.primerContentParrafos}>
            <h4>
              PrOMIS es un estudio longitudinal enfocado en hacer seguimiento de
              la salud física y mental de la madre y de su hijo en la etapa
              prenatal y postnatal durante el desarrollo de la niñez
            </h4>
            <p>
              Comenzó en febrero de 2012, con una convocatoria a aproximadamente
              5000 mujeres gestantes que recibieron cuidado prenatal en el
              Instituto Nacional Materno Perinatal de Lima.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.coverAcerca}></div>
      <MisionContainer />
      <div className={styles.historia}>
        <p className={styles.historiaTitulo}>+ NUESTRA HISTORIA</p>
        <div className={styles.mainHistoriaContent}>
          <div className={styles.historiaContainer}>
            <h3>
              Un estudio que
              <br /> nació de la
              <br /> necesidad de
              <br /> cambiar realidades
            </h3>
            <p>
              En 2005, un estudio de la Organización Mundial de la Salud sobre
              la violencia contra la mujer reveló una dura verdad en Perú. Estos
              hallazgos impulsaron a un grupo de investigadores nacionales e
              internacionales a profundizar en cómo las experiencias de
              violencia afectan la salud física y mental de las mujeres y la de
              sus hijos e hijas. Así nació PrOMIS: un estudio comprometido con
              generar cambios significativos.
            </p>
          </div>
          <div className={styles.historiaImagen}>
            <Image
              src="/equipoPromis.jpg"
              alt="Equipo de Promis"
              width={600}
              height={400}
              // className={styles.imageMision}
            />
            <p>
              Evento de socialización y divulgación de resultados con la
              comunidad del estudio PrOMIS, Agosto 2023.
              <br />
              <a
                href="https://www.who.int/publications/i/item/9241593512"
                target="_blank"
              >
                https://www.who.int/publications/i/item/9241593512
              </a>
            </p>
          </div>
        </div>
      </div>

      <DatosConciencia />
      <div className={styles.Importante}>
        <p className={styles.acercaTitulo}>+ ¿POR QUÉ PrOMIS ES IMPORTANTE?</p>
        <div className={styles.mainImportante}>
          <div className={styles.mainImportanteTitulo}>
            <h3>&quot;Abordando las raíces del problema&quot;</h3>
          </div>

          <div className={styles.mainImportanteP}>
            <p>
              PrOMIS investiga cómo los factores de estres psicosociales, como
              la violencia intrafamiliar, influyen en la salud física y mental
              de las madres y en el desarrollo físico y emocional de sus hijos e
              hijas, para proponer soluciones basadas en evidencia.
            </p>
          </div>
        </div>
        <ProblemaCuadros />
      </div>
      <Unete />
    </div>
  );
};

export default page;
