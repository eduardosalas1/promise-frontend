import Unete from "@/components/unete/Unete";
import React from "react";
import styles from "@/styles/contactos.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.all}>
      <div className={styles.contactanos}>
        <div className={styles.contactanosBlock}>
          <h4>CONTÁCTANOS</h4>
          <h2>
            Queremos <br />
            escucharte
          </h2>
          {/* <p>
            Have any question in mind or want to <br /> enquire? Please feel
            free to contact us <br /> through the form or the following details.
          </p> */}
        </div>
        <div className={styles.contactanosBlock}>
          <div>
            <h3>Hablemos!</h3>
            <div className={styles.contacto}>
              <p>+51 986 660 619</p>
              <p>administracion@acproesa.com</p>
            </div>
            <div className={styles.line}></div>
          </div>

          <div>
            <h3>Oficinas</h3>
            <p>
              / Oficina de investigación de la <br />
              maternidad
            </p>
            <p>/ Oficina A.C. Proesa</p>
            <p>/ Jirón Camaná Nro. 872 Oficina 4 Perú - Lima - Lima - Lima</p>
          </div>

          <div className={styles.redes}>
            <div className={styles.redesIcon}>
              <a
                href="https://www.facebook.com/ac.proesa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook-logo.svg"
                  alt="Logo de Facebook"
                  width={22}
                  height={22}
                />
              </a>
            </div>
            <div className={styles.webIcon}>
              <a
                href="https://acproesa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/web_icon.svg"
                  alt="Logo de Web"
                  width={27}
                  height={27}
                />
              </a>
            </div>
            {/* <Image
              src="/twitter-logo.svg"
              alt="Logo de Facebook"
              width={22}
              height={22}
            />
            <Image
              src="/linkdln-logo.svg"
              alt="Logo de Facebook"
              width={22}
              height={22}
            /> */}
          </div>
        </div>
      </div>

      <Unete />
    </div>
  );
};

export default page;
