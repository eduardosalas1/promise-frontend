import Unete from "@/components/unete/Unete";
import React from "react";
import styles from "@/styles/contactos.module.css";
import Image from "next/image";

const ContactoPage = () => {
  return (
    <div className={styles.all}>
      <div className={styles.contactanos}>
        <div className={styles.contactanosBlock}>
          <h4>CONTÁCTANOS</h4>
          <h2>
            Queremos <br />
            escucharte
          </h2>
          <p>
            Have any question in mind or want to <br /> enquire? Please feel
            free to contact us <br /> through the form or the following details.
          </p>
        </div>
        <div className={styles.contactanosBlock}>
          <div>
            <h3>Hablemos!</h3>
            <div className={styles.contacto}>
              <p>+234 09012346514</p>
              <p>hello@proesa.com.pe</p>
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
          </div>

          <div className={styles.redes}>
            <Image
              src="/facebook-logo.svg"
              alt="Logo de Facebook"
              width={22}
              height={22}
            />
            <Image
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
            />
          </div>
        </div>
      </div>

      <Unete />
    </div>
  );
};

export default ContactoPage;
