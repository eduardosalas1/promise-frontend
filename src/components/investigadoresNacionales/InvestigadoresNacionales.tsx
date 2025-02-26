import React from "react";
import styles from "./styles/investigadores.module.css";
import CuadroColaborador from "../cuadroColaborador/CuadroColaborador";

const InvestigadoresNacionales = () => {
  return (
    <div className={styles.mainInvestigadores}>
      <h3>NUESTRO EQUIPO DE INVESTIGACIÓN</h3>
      <div className={styles.titulo}>
        <h2>Investigadores Nacionales</h2>
        <div className={styles.ciudad}>
          <p>Lima. Perú</p>
          <img src="/peru-bandera.svg" alt="bandera del perú" />
        </div>
      </div>
      <div className={styles.investigadores}>
        <CuadroColaborador
          src="/sixto_sanchez_calderon.jpg"
          nombre="Sixto Sanchéz Calderón"
          profesion="Médico Cirujano y Gineco-Obstetra"
          texto_link="CTI Vitae Sixto Sánchez Calderón"
          link="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=31242"
          color="azul"
          posicion="arriba"
        />
        <div className={styles.bottomInvestigadores}>
          <CuadroColaborador
            src="/marta_rondon_rondon.jpg"
            nombre="Marta Rondón Rondón"
            profesion="Psiquiatra"
            texto_link="CTI Vitae Marta Rondón Rondón"
            link="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=212205"
            color="amarillo"
            posicion="abajo"
          />
          <CuadroColaborador
            src="/nelida_pinto_aliaga.jpg"
            nombre="Nélida Pinto Aliaga"
            profesion="Médica Gineco Obstetra"
            texto_link="CTI Vitae Nélido Pinto Aliaga"
            link="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=212205"
            color="amarillo"
            posicion="abajo"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestigadoresNacionales;
