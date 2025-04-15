import React from "react";
import styles from "./styles/seguimiento.module.css";
import CuadroColaborador from "../cuadroColaborador/CuadroColaborador";

const EquipoSeguimiento = () => {
  return (
    <div className={styles.mainInvestigadores}>
      <h3>EQUIPO TERCER SEGUIMIENTO</h3>
      <div className={styles.titulo}>
        <h2>Equipo PrOMIS</h2>
        <div className={styles.ciudad}>
          <p>Actual (2021 / 2024)</p>
        </div>
      </div>
      <div className={styles.investigadores}>
        <CuadroColaborador
          src="/elena_sanchez.jpg"
          nombre="Elena Sánchez"
          profesion="Coordinadora de investigacion"
          texto_link=""
          link=""
          color="rosado"
          posicion="abajo"
        />
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/mayra_rivera.jpg"
            nombre="Mayra Rivera"
            profesion="Licenciada en Trabajo Social"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/silvia_tacuna.jpg"
            nombre="Silvia Tacuna"
            profesion="Licenciada en Trabajo Social"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
        </div>
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/andrea_lozano.jpg"
            nombre="Andrea Lozano"
            profesion="Licenciada en Psicología"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/silvia_tacuna.jpg"
            nombre="Elizabeth Ramos"
            profesion="Licenciada en Obstetra"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
        </div>
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/maria_jimenez.jpg"
            nombre="María Jiménez"
            profesion="Licenciada en Psicología"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/jessica_cortez.jpg"
            nombre="Jessica Cortez"
            profesion="Licenciada en Psicología"
            texto_link=""
            link=""
            color="rosado"
            posicion="abajo"
          />
        </div>
      </div>
    </div>
  );
};

export default EquipoSeguimiento;
