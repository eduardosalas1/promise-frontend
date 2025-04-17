import InvestigadoresNacionales from "@/components/investigadoresNacionales/InvestigadoresNacionales";
import React from "react";
import styles from "@/styles/investigadores.module.css";
import InvestigadoresInternacionales from "@/components/investigadoresNacionales/InvestigadoresInternacionales";
import CarruselInvolucrados from "@/components/carrousel/CarruselInvolucrados";
// import CuadroColaborador from "@/components/cuadroColaborador/CuadroColaborador";
import AsociadosInstituciones from "@/components/asociados/AsociadosInstituciones";
import AsociadosInstitucionesEncargadas from "@/components/asociados/AsociadosInstitucionesEncargadas";

const page = () => {
  return (
    <div className={styles.all}>
      <InvestigadoresNacionales />
      <InvestigadoresInternacionales />

      <div className={styles.involucrados}>
        <h3 className={styles.involucradosTop}>+ INVOLUCRADOS EN PROMIS</h3>
        <AsociadosInstituciones />
        <AsociadosInstitucionesEncargadas />

        <div className={styles.involucradosTop}>
          <h3 className={styles.involucradosTop}>+ INVOLUCRADOS EN PROMIS</h3>
          <div className={styles.colaboradores}>
            <h2>
              Instituciones <br />
              Colaboradoras
            </h2>
          </div>
          <CarruselInvolucrados />
        </div>

        <div className={styles.bottomInvestigadores}></div>
      </div>
    </div>
  );
};

export default page;

// Diversidad en los patrones de metilacion del ADN entre poblaciones y riesgo diferencial de enfermedades
// Biomarcadores de estres cronico
// Marcadores metabolomicos e inmunitarios asociados con problemas de salud mental y del embarazo.
