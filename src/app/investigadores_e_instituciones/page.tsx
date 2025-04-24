import InvestigadoresNacionales from "@/components/investigadoresNacionales/InvestigadoresNacionales";
import React from "react";
import styles from "@/styles/investigadores.module.css";
import InvestigadoresInternacionales from "@/components/investigadoresNacionales/InvestigadoresInternacionales";
import CarruselInvolucrados from "@/components/carrousel/CarruselInvolucrados";
// import CuadroColaborador from "@/components/cuadroColaborador/CuadroColaborador";
import AsociadosInstituciones from "@/components/asociados/AsociadosInstituciones";

const page = () => {
  return (
    <div className={styles.all}>
      <InvestigadoresNacionales />
      <InvestigadoresInternacionales />

      <div className={styles.involucrados}>
        <h3 className={styles.involucradosTop}>+ INVOLUCRADOS EN PROMIS</h3>
        <h2>
          Instituciones <br /> Colaboradoras
        </h2>

        <CarruselInvolucrados />
        <AsociadosInstituciones />
        {/* <AsociadosInstitucionesEncargadas /> */}

        <div className={styles.bottomInvestigadores}></div>
      </div>
    </div>
  );
};

export default page;

{
  /* <CarruselInvolucrados />; */
}
