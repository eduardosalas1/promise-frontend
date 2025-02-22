import React from "react";
import styles from "./styles/datosConciencia.module.css";
import Precaucion from "./Precaucion";

const DatosConciencia = () => {
  return (
    <div className={styles.entorno}>
      <div className={styles.entornoTitulo}>
        <h3>+ DATOS QUE DESPIERTAN CONCIENCIA</h3>
        <h2> &quot;La realidad detrás de los números&quot;.</h2>
      </div>
      <div>
        <div className={styles.PrecaucionContainer}>
          <Precaucion
            titulo="Prevalencia de violencia física y sexual"
            parrafo="En zonas urbanas, el 41% de las mujeres de 15 a 19 años enfrenta mayor riesgo de violencia física o sexual."
          />
          <Precaucion
            titulo="Amenazas de daño"
            parrafo="1 de cada 4 mujeres peruanas reporta amenazas de daño en el último año."
          />
        </div>
        <div className={styles.PrecaucionContainer}>
          <Precaucion
            titulo="Creencias culturales"
            parrafo="Hasta un 20% de mujeres en provincias considera que no tienen derecho a negarse a relaciones sexuales en ciertas circunstancias."
          />
          <Precaucion
            titulo="Violencia sexual fuera de la pareja"
            parrafo="El 10% de las mujeres ha sido obligada a actos sexuales no deseados desde los 15 años."
          />
        </div>
      </div>
    </div>
  );
};

export default DatosConciencia;
