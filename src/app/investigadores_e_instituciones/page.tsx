import InvestigadoresNacionales from "@/components/investigadoresNacionales/InvestigadoresNacionales";
import React from "react";
import styles from "@/styles/investigadores.module.css";
import InvestigadoresInternacionales from "@/components/investigadoresNacionales/InvestigadoresInternacionales";
import CarruselInvolucrados from "@/components/carrousel/CarruselInvolucrados";
import CuadroColaborador from "@/components/cuadroColaborador/CuadroColaborador";
import AsociadosInstituciones from "@/components/asociados/AsociadosInstituciones";

const page = () => {
  return (
    <div className={styles.all}>
      <InvestigadoresNacionales />
      <InvestigadoresInternacionales />

      <div className={styles.involucrados}>
        <div className={styles.involucradosTop}>
          <h3>+ INVOLUCRADOS EN PROMIS</h3>
          <div className={styles.colaboradores}>
            <h2>Instituciones Colaboradores</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
            </p>
          </div>
        </div>
        <CarruselInvolucrados />
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/elizabeth_levey.jpg"
            nombre="Elizabeth Levey"
            profesion="Profesor de Epidemiología y Psiquiatría"
            texto_link="Harvard Bizu Gelaye"
            link=""
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/archana_basu.jpg"
            nombre="Archana Basu"
            profesion="Profesor de Epidemiología y Psiquiatría"
            texto_link="Harvard Bizu Gelaye"
            link=""
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/diana_juvinao_quintero.jpg"
            nombre="Diana Juvinao-Quintero"
            profesion="Profesor de Epidemiología y Psiquiatría"
            texto_link="Harvard Bizu Gelaye"
            link=""
            color="amarillo"
            posicion="abajo"
          />
        </div>

        <AsociadosInstituciones />
      </div>
    </div>
  );
};

export default page;
