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
        <div className={styles.iconosBodyBanner}>
          <img src="/preguntas.svg" alt="iconos de pregunta" />
        </div>
        <div className={styles.rowBodyBanner}>
          <h2 className={styles.ComponentBodyBanner}>
            ¿Por qué me <br /> invitaron a mí?
          </h2>

          <p className={styles.ComponentBodyBanner}>
            El estudio inició invitando a participar a más de 5000 mujeres que
            estaban gestando de 14 a 20 semanas, y se atendían en el Instituto
            Nacional Materno Perinatal más conocido como La Maternidad de Lima,
            entre los años 2012 al 2015.  En la actualidad se han realizado dos
            seguimientos post natales, uno en el 2017 y el último en el 2021 al
            2025.
          </p>
        </div>

        <div className={styles.separatorBodyBanner}></div>

        <div className={styles.rowBodyBanner}>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Por qué PrOMIS hacen <br />
              este seguimiento durante <br />
              tanto tiempo? 
            </h2>
            <p className={styles.ComponentBodyBanner}>
              Porque dentro de las 5000 mujeres aproximadamente que invitamos
              hay quienes han tenido experiencias no traumáticas y otras que han
              tenido experiencias traumáticas de distintos tipos, como violencia
              por parte de la pareja. Entonces, el seguimiento tiene la
              finalidad de saber cómo las diversas experiencias que tienen las
              madres antes y durante del embarazo, impactan en la salud física y
              mental de sus hijos o hijas.
            </p>
          </div>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Qué implica participar <br />
              en PrOMIS? 
            </h2>
            <p className={styles.ComponentBodyBanner}>
              Primero debes estar dentro de las aproximadamente 5000 mujeres que
              invitamos durante la atención del embarazo, luego te contactaremos
              y te invitaremos, si tú decides continuar entonces tendrás que
              hacer 3 cosas 
            </p>
          </div>
        </div>

        <div className={styles.separatorBodyBanner}></div>

        <div className={styles.rowBodyBanner}>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Participar en
              <br /> PrOMIS es gratis?
            </h2>
            <p className={styles.ComponentBodyBanner}>
              Sí, es totalmente gratuito. Por el contrario, nosotros trataremos
              de compensar tu tiempo dedicado a este estudio con un pequeño
              monto económico: 27 soles de compensación de movilidad, 33 soles
              de compensación por el tiempo de la entrevista y 27 soles de
              compensación por tu tiempo empleado en la realización del video de
              juego.
            </p>
          </div>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Existe algún riesgo de participar en PrOMIS?
            </h2>
            <p className={styles.ComponentBodyBanner}>
              No hay ningún riesgo, sin embargo, realizar las muestras de
              cabello y saliva pueden causarte incomodidad, aunque no son
              dolorosas, así como realizar la entrevista también puede hacerte
              recordar eventos dolorosos.
            </p>
          </div>
        </div>

        <div className={styles.separatorBodyBanner}></div>

        <div className={styles.rowBodyBanner}>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Tengo algún beneficio <br />
              por participar en PrOMIS?
            </h2>
            <p className={styles.ComponentBodyBanner}>
              No hay un beneficio directo, sin embargo, su participación
              contribuye con la ciencia en entender cómo impactan las
              situaciones estresantes que viven las madres antes y durante el
              embarazo en la salud física y mental de sus hijos.
            </p>
          </div>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Entregarán resultados?
            </h2>
            <p className={styles.ComponentBodyBanner}>
              En los estudios donde hacemos un seguimiento a lo largo del
              tiempo, no se entregan resultados individuales, ya que el objetivo
              es estudiar a la población en su conjunto. En el caso del PrOMIS,
              las muestras son procesadas en los Estados Unidos y son enviadas
              en grupos grandes, y los videos son analizados por un grupo de
              profesionales. Sin embargo, si durante el proceso de participación
              detectamos señales de depresión, problemas conductuales de los y
              las niñas, situaciones de riesgo para para la vida de la mujer o
              de los hijos o situaciones que las madres deseen conversar,
              podemos ofrecerles orientación y consejería psicológica, así como
              una cita virtual con una psiquiatra del estudio.
            </p>
          </div>
        </div>

        <div className={styles.separatorBodyBanner}></div>

        <div className={styles.rowBodyBanner}>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Cómo se protegen <br />
              mis datos?
            </h2>
            <p className={styles.ComponentBodyBanner}>
              El PrOMIS es un estudio que ha pasado rigurosas evaluaciones a
              nivel ético por el Comité de ética de los Estados Unidos, así como
              por el comité de ética del Instituto Nacional Materno Perinatal, y
              de todos los centros de salud donde se recogerán la información de
              las historias clínicas. Esto implica que somos muy cuidadosos del
              manejo de la información, razón por la cual toda la información
              que nos brinde está guardada en el software llamado REDCap, que
              cuenta con contraseña y solo es manejada por el equipo de
              investigación, además usamos códigos de manera que se
              desidentifica su información personal.
            </p>
          </div>
          <div className={styles.ComponentBodyBanner}>
            <h2 className={styles.ComponentBodyBanner}>
              ¿Quién Financia
              <br /> PrOMIS?
            </h2>
            <div>
              <p className={styles.ComponentBodyBanner}>
                El Instituto Nacional de Salud de los Estados Unidos de América,
                es la encargada de proveer financiamiento a este estudio.
              </p>
              <button className={styles.buttonComponents}>
                ¿Tienes alguna duda?
              </button>
            </div>
          </div>
        </div>
      </div>
      <EquipoSeguimiento />
      <Unete />
    </div>
  );
};

export default Page;
