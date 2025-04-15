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
        <h3 className={styles.involucradosTop}>+ INVOLUCRADOS EN PROMIS</h3>
        <AsociadosInstituciones />
        <div className={styles.involucradosTop}>
          <div className={styles.colaboradores}>
            <h2>Instituciones Colaboradoras</h2>
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
            nombre=""
            profesion="Diversidad en los patrones de metilacion del ADN entre poblaciones y riesgo diferencial de enfermedades"
            texto_link=""
            link=""
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/archana_basu.jpg"
            nombre=""
            profesion="Biomarcadores de estres cronico"
            texto_link=""
            link=""
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/diana_juvinao_quintero.jpg"
            nombre=""
            profesion="Marcadores metabolomicos e inmunitarios asociados con problemas de salud mental y del embarazo."
            texto_link=""
            link=""
            color="amarillo"
            posicion="abajo"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
