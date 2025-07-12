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
          src="/bizu-gelaye-2.jpg"
          nombre="Bizu Gelaye"
          profesion="Profesor de Epidemiología y Psiquiatría"
          texto_link="Perfil profesional"
          link="https://connects.catalyst.harvard.edu/Profiles/display/Person/104635"
          color="azul"
          posicion="arriba"
        />
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/elizabeth_levey.jpg"
            nombre="Elizabeth Levey"
            profesion="Psiquiatra de adultos, niños y adolescentes"
            texto_link="Harvard Elizabeth Levey"
            link="https://connects.catalyst.harvard.edu/Profiles/display/Person/33148"
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/archana_basu.jpg"
            nombre="Archana Basu"
            profesion=" Psicóloga en la División de Psiquiatría Infantil y Adolescente"
            texto_link="Harvard Archana Basu"
            link="https://connects.catalyst.harvard.edu/Profiles/display/Person/141019"
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/diana_juvinao_quintero.jpg"
            nombre="Diana Juvinao-Quintero"
            profesion="Epidemiologa prenatal y molecular"
            texto_link="Harvard Diana Juvinao-Quintero"
            link="https://connects.catalyst.harvard.edu/Profiles/display/Person/178858"
            color="amarillo"
            posicion="abajo"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestigadoresInternacionales;
