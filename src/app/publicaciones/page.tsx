import React from "react";
import styles from "@/styles/publicaciones.module.css";
import Unete from "@/components/unete/Unete";
// import EventosCuadros from "@/components/eventosCuadros/EventosCuadros";
import MainEvento from "@/components/mainEvento/MainEvento";

const page = () => {
  return (
    <div className={styles.publicaciones}>
      <div className={styles.mainPage}>
        <MainEvento />
      </div>
      {/* <div className={styles.lowpage}>
        <h2>Nuestros Eventos</h2>
        <EventosCuadros />
      </div> */}
      <Unete />
    </div>
  );
};

export default page;
