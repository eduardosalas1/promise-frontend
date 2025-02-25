import React from "react";
import styles from "./styles/investigadores.module.css";
import CuadroColaborador from "../cuadroColaborador/CuadroColaborador";

const InvestigadoresInternacionales = () => {
  return (
    <div className={styles.mainInvestigadoresInternacionales}>
      <div className={styles.titulo}>
        <h2>Investigadores Internacionales</h2>
        <div className={styles.ciudad}>
          <p>Estados Unidos</p>
          <img src="/usa_bandera.svg" alt="bandera de usa" />
        </div>
      </div>
      <div className={styles.investigadores}>
        <CuadroColaborador
          src="/bizu_gelaye.jpg"
          nombre="Bizu Gelaye"
          profesion="Profesor de Epidemiología y Psiquiatría"
          texto_link="Harvard Bizu Gelaye"
          link=""
          color="azul"
          posicion="arriba"
        />
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
      </div>
    </div>
  );
};

export default InvestigadoresInternacionales;
