import React from "react";
import styles from "./css/NuestrosSeguimientos.module.css";
import CuadroSeguimiento from "./CuadroSeguimiento";

const Seguimientos = () => {
  return (
    <div className={styles.seguimientos}>
      <CuadroSeguimiento
        titulo="Primer seguimiento"
        fecha="(2012-2015)"
        primerParrafo="Esa medición buscaba saber cómo se relacionan los factores estresantes antes y durante del embarazo con el riesgo de desarrollar parto prematuro y otras consecuencias adversas durante el embarazo."
        segundoParrafo="Participaron 5440 madres a las que se les realizó el primer seguimiento."
        icono="/icono_embarazo.svg"
        color="azul"
      />
      <CuadroSeguimiento
        titulo="Segundo seguimiento"
        fecha="(2017-2018)"
        primerParrafo="Esa medición buscaba saber cómo las situaciones estresantes antes o durante el embarazo, afectan el crecimiento, el desarrollo conductual y cognitivo y el nivel de estrés de su hijo o hija."
        segundoParrafo="Participaron 634 madres y sus hijos e hijas que participaron en el primer seguimiento."
        icono="/icono_bebe.svg"
        color="amarillo"
      />
      <CuadroSeguimiento
        titulo="Tercer seguimiento"
        fecha="(Oct 2021 - presente)"
        primerParrafo="En esta medición buscamos saber cómo las situaciones estresantes antes o durante el embarazo, afectan la calidad de la relación madre-hijo/a, el nivel de estrés, los marcadores genéticos del niño y el riesgo de futuras enfermedades."
        segundoParrafo="El objetivo es enrolar a 1500 madres y sus hijos e hijas que se les realizó el primer seguimiento."
        icono="/icono_niña.svg"
        color="rosado"
      />
    </div>
  );
};

export default Seguimientos;
