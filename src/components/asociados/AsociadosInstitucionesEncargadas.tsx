import React from "react";
import styles from "./styles/asociados.module.css";
import AsociadoComponente from "./AsociadoComponente";

const AsociadosInstitucionesEncargadas = () => {
  return (
    <div className={styles.all}>
      <h2>Instituciones Encargadas</h2>
      <div className={styles.Componentes}>
        <AsociadoComponente
          src="/materno-perinatal.png"
          bandera="peru"
          titulo="Instituto Nacional Materno Perinatal (INMP)"
          parrafo="Especializado en la atención materno perinatal, brindando cuidado a mujeres de bajos ingresos. El INMP es clave en la realización del estudio PrOMIS desde 2012."
          text_link=""
          link=""
        />
        {/* <AsociadoComponente
          src="/proesa-logo.svg"
          bandera="peru"
          titulo="Asociación Civil Proyectos en Salud (AC PROESA)"
          parrafo="Organiza y administra los fondos para los estudios de investigación en salud materno perinatal, colaborando con la Universidad de Harvard y el INMP."
          text_link="AC PROESA"
          link=""
        /> */}
        <AsociadoComponente
          src="/harvard-logo.png"
          bandera="usa"
          titulo="Universidad de Harvard"
          parrafo="Especializado en la atención materno perinatal, brindando cuidado a mujeres de bajos ingresos. El INMP es clave en la realización del estudio PrOMIS desde 2012."
          text_link=""
          link=""
        />
        {/* <AsociadoComponente
          src="/msh-logo.png"
          bandera="usa"
          titulo="Hospital General de Massachusetts"
          parrafo="Especializado en la atención materno perinatal, brindando cuidado a mujeres de bajos ingresos. El INMP es clave en la realización del estudio PrOMIS desde 2012."
          text_link="INMP"
          link=""
        /> */}
      </div>
    </div>
  );
};

export default AsociadosInstitucionesEncargadas;
