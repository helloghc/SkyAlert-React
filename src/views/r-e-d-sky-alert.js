import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
import Heading21 from '../components/heading21'
import REDslot from '../components/r-e-dslot'
import Heading2 from '../components/heading2'
import Bloques1 from '../components/bloques1'
import HeadingSkyAlert13 from '../components/heading-sky-alert13'
import HeadingSkyAlert14 from '../components/heading-sky-alert14'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './r-e-d-sky-alert.css'

const REDSkyAlert = (props) => {
  return (
    <div className="r-e-d-sky-alert-container">
      <Helmet>
        <title>
          Red SkyAlert: ¡Nuestro Sensor de Sismos al Servicio del México!
        </title>
        <meta
          name="description"
          content="Conoce el funcionamiento del Sensor de Sismos REDSkyAlert. ¡Haz clic aquí para conocer cómo aportamos al cuidado de todo México!"
        />
        <meta
          property="og:title"
          content="Red SkyAlert: ¡Nuestro Sensor de Sismos al Servicio del México!"
        />
        <meta
          property="og:description"
          content="Conoce el funcionamiento del Sensor de Sismos REDSkyAlert. ¡Haz clic aquí para conocer cómo aportamos al cuidado de todo México!"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name2"></Navbarblack>
      <Breadcrum text2="REDSkyAlert"></Breadcrum>
      <main className="r-e-d-sky-alert-main">
        <Heading21
          text="¿Qué es y cómo funciona la REDSkyAlert?"
          text2="Contamos con más de 120 sensores instalados en 12 estados de la República Mexicana."
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name11"
        ></Heading21>
        <REDslot
          text31="Esta red inteligente puede confirmar o descartar un sismo en milisegundos."
          rootClassName="r-e-dslot-root-class-name"
        ></REDslot>
        <Heading21
          text="Cobertura REDSkyAlert"
          text2="Contamos con más de 120 sensores instalados en 12 estados de la República Mexicana"
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name15"
        ></Heading21>
        <div className="r-e-d-sky-alert-container1">
          <img
            alt="image"
            src="/playground_assets/redskyalert_05-1200w.jpg"
            className="r-e-d-sky-alert-image"
          />
        </div>
        <Heading2
          text="En SkyAlert basamos las alertas en la escala de"
          text1="INTENSIDAD"
          text2="Un sismo tiene una sola magnitud, pero cada localidad tiene diferentes intensidades en suelos blandos; en CDMX las ondas sísmicas pueden amplificarse."
          rootClassName="heading2-root-class-name3"
        ></Heading2>
        <Bloques1 rootClassName="bloques1-root-class-name"></Bloques1>
        <Heading21
          text="Escala de intensidad sísmica"
          text2="En SkyAlert alertamos basados en la escala de INTENSIDAD."
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name16"
        ></Heading21>
        <h1 className="r-e-d-sky-alert-text">
          Se escucha un tono corto y una voz de &quot;SISMO DETECTADO&quot; con
          la intensidad local esperada.
        </h1>
        <HeadingSkyAlert13 rootClassName="heading-sky-alert13-root-class-name"></HeadingSkyAlert13>
      </main>
      <h1 className="r-e-d-sky-alert-text1">
        Se escucha un tono fuerte y diferente al de sismos no destructivos, con
        una voz de &quot;ALERTA SÍSMICA&quot; con la intensidad local esperada.
      </h1>
      <HeadingSkyAlert14
        text="Se escucha un tono fuerte y diferente al de sismos no destructivos, con una voz de"
        text1='"ALERTA SÍSMICA"'
        text31="Pueden causar daños ligeros en estructuras y caída de objetos"
        heading="Alerta Sísmica"
        text311="Pueden causar daños dependiendo del tipo de estructura. Se pueden generar grietas"
        text312="Potencialmente destructivos. Son percibidos a distancias mayores a 500km del epicentro"
        text3111="Altamente destructivos. Afectaciones importantes a estructuras y dificultad para permanecer en pie"
        heading11="Moderado"
        heading111="Fuerte"
        heading112="Violento"
        heading1111="Severo"
        rootClassName="heading-sky-alert14-root-class-name"
      ></HeadingSkyAlert14>
      <Heading21
        text="Hablemos de soluciones empresariales"
        text2="Tenemos la solución precisa para tu empresa. En breve un asesor se comunicará contigo."
        image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
        rootClassName="heading21-root-class-name5"
      ></Heading21>
      <Footer rootClassName="footer-root-class-name3"></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default REDSkyAlert
