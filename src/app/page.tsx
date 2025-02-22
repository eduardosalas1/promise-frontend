import Actualidad from "@/components/actualidad/Actualidad";
import Carrusel from "@/components/carrousel/Carrusel";
import Datos from "@/components/datosPromis/datos";
import MainBanner from "@/components/mainBanner/MainBanner";
import Opciones from "@/components/opcionesIconos/Opciones";
import Publicaciones from "@/components/publicaciones/Publicaciones";
import Unete from "@/components/unete/Unete";
import styles from "@/styles/main.module.css";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <div className={styles.publicaciones}>
        <p className={styles.publicacionesTitulo}>+ QUIÉNES SOMOS?</p>
        <h2>
          &quot;Estudio pionero sobre el impacto del entorno <br /> materno en
          el desarrollo infantil en Perú&quot;.
        </h2>
      </div>
      <Opciones />
      <div>
        <Actualidad />
      </div>
      <div className={styles.carrusel}>
        <Carrusel />
      </div>
      <div className={styles.publicaciones}>
        <p className={styles.publicacionesTitulo}>+ PUBLICACIONES</p>
        <h2>
          &quot;Apoyando a madres y niños,
          <br /> construyendo su futuro.&quot;
        </h2>
        <Publicaciones />
      </div>
      <div className={styles.lowpage}>
        <Datos />
        <Unete />
      </div>
    </div>
  );
}
