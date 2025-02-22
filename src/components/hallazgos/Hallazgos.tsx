import React from "react";
import styles from "./styles/hallazgos.module.css";

const Hallazgos = ({ imagen, titulo }: { imagen: string; titulo: string }) => {
  return (
    <div className={styles.Content}>
      <img src={imagen} className={styles.imgContent} />
      <div className={styles.mainContent}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>15th Nov 2022</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim
        </p>
        <a href="#">Ver más sobre hallazgo +</a>
      </div>
    </div>
  );
};

export default Hallazgos;
