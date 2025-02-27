"use client";

import React, { useState } from "react";
import styles from "@/styles/actualidad.module.css";
import Image from "next/image";
import Unete from "@/components/unete/Unete";
import EquipoSeguimiento from "@/components/equipoSeguimiento/EquipoSeguimiento";

const Page = () => {
  const [boton, setBoton] = useState<string>("Overview");
  return (
    <div className={styles.all}>
      <div className={styles.mainBanner}>
        <div className={styles.yellowMainBanner}>
          <h3>+ AVANCES Y SEGUIMIENTOS</h3>
          <div className={styles.textMainBanner}>
            <h2>Actualidad PrOMIS </h2>
            <p>
              When you donate, you are supporting effective care to children
              with special needs—an investment in the leaders of tomorrow.
            </p>
          </div>
        </div>
        <Image
          src="/madre_hijo.jpg"
          width={480}
          height={320}
          alt="madre e hijo"
          className={styles.imagenMainBanner}
        />
      </div>

      <div className={styles.bodyBanner}>
        <div className={styles.rowBodyBanner}>
          <div className={styles.ComponentBodyBanner}>
            <h2>How you can contribute to caring for our kids</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className={styles.ComponentBodyBanner}>
            <div className={styles.buttonComponents}>
              <button
                type="button"
                className={
                  boton === "Overview"
                    ? styles.yellowButton
                    : styles.classicButton
                }
                onClick={() => setBoton("Overview")}
              >
                Overview
              </button>
              <button
                type="button"
                className={
                  boton === "Impact"
                    ? styles.yellowButton
                    : styles.classicButton
                }
                onClick={() => setBoton("Impact")}
              >
                Impact
              </button>
              <button
                type="button"
                className={
                  boton === "What" ? styles.yellowButton : styles.classicButton
                }
                onClick={() => setBoton("What")}
              >
                What you get
              </button>
            </div>
            <div>
              {boton === "Overview" ? (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              ) : (
                <p>
                  Lorem ipsum dolor pero con distinto texto sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in eros
                  elementum tristique. Duis cursus, mi quis viverra ornare, eros
                  dolor interdum nulla, ut commodo diam libero vitae erat.
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.separatorBodyBanner}></div>
        <div className={styles.rowBodyBanner}>
          <h2 className={styles.ComponentBodyBanner}>
            How we use your donation
          </h2>
          <p className={styles.ComponentBodyBanner}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className={styles.ComponentBodyBanner}>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
            cursus id rutrum lorem imperdiet.
          </p>
        </div>
      </div>
      <EquipoSeguimiento />
      <Unete />
    </div>
  );
};

export default Page;
