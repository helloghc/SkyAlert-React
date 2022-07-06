import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
import Heading21 from '../components/heading21'
import Heading31 from '../components/heading31'
import Apps from '../components/apps'
import Appfeatcardtext2 from '../components/appfeatcardtext2'
import BulletSoluciones11 from '../components/bullet-soluciones11'
import Mexiconaranja from '../components/mexiconaranja'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './app.css'

const Appskyalert = (props) => {
  return (
    <div className="app-container">
      <Helmet>
        <title>
          Descarga la App de SkyAlert Para Recibir Alertas Sísmicas en Vivo
        </title>
        <meta
          name="description"
          content="¡Recibe nuestras Alertas Sísmicas en Vivo! Con un solo clic tendrás a la mano los principales eventos de terremotos que podrían ocurrir. ¡Descubre cómo!"
        />
        <meta
          property="og:title"
          content="Descarga la App de SkyAlert Para Recibir Alertas Sísmicas en Vivo"
        />
        <meta
          property="og:description"
          content="¡Recibe nuestras Alertas Sísmicas en Vivo! Con un solo clic tendrás a la mano los principales eventos de terremotos que podrían ocurrir. ¡Descubre cómo!"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name1"></Navbarblack>
      <Breadcrum
        text2="SkyAlert App"
        rootClassName="breadcrum-root-class-name"
      ></Breadcrum>
      <main className="app-main">
        <Heading21
          text="La App de alertamiento sísmico más descargada en México"
          text2="Gracias a las suscripciones incrementamos la cobertura de REDSkyAlert, llegando así a lugares que por primera vez tienen alerta sísmica como Chiapas, Veracruz, Estado de México, Hidalgo, entre otros."
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name8"
        ></Heading21>
        <img
          alt="image"
          src="/playground_assets/app_072-1500w.png"
          className="app-image"
        />
        <Heading31 rootClassName="heading31-root-class-name1"></Heading31>
        <Apps rootClassName="apps-root-class-name"></Apps>
        <Heading21
          text="Conoce los beneficios de SkyAlert App"
          text2=" "
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name9"
        ></Heading21>
        <Appfeatcardtext2
          text1="Todas las alertas se filtran automáticamente, así sólo recibirás alertas con la intensidad que se espera en tu ubicación."
          text2='Descarga la app más avanzada de alertamiento sísmico. Recibirás alertas con el tiempo estimado de arribo de un sismo con hasta 3 minutos de anticipación*, aunque tu teléfono esté en modo "No Molestar".'
          text11="Además de contar con intensidad en tu ubicación, también recibes el tiempo estimado de arribo y puedes agregar hasta 3 ubicaciones adicionales"
          text12="Te notificamos cuántos segundos tienes antes de la llegada de un sismo a tu ubicación"
          text21="Con SkyAlert 4, todos reciben alertas de sismos que pueden sentirse en su localidad."
          text111="Actividad volcánica, tsunamis, sismos internacionales, eventos meteorológicos, entre otros."
          heading1="Intensidad Local"
          heading2="Recibe alertas sísmicas"
          heading11="Obtén beneficios con SkyAlert GOLD"
          heading12="TEA (Tiempo Estimado de Arribo)"
          heading21="Filtro sísmico inteligente"
          heading111="Notificaciones de otros peligros naturales"
          image_src1="/playground_assets/icons8-vibration-32-200h.png"
          image_src2="/playground_assets/icons8-alarm-100-200h.png"
          image_src11="/playground_assets/icons8-gold-100-200h.png"
          image_src12="/playground_assets/icons8-clock-50-200h.png"
          image_src21="/playground_assets/icons8-3d-touch-50-200h.png"
          image_src111="/playground_assets/icons8-volcano-100-200h.png"
          rootClassName="appfeatcardtext2-root-class-name"
        ></Appfeatcardtext2>
        <Heading21
          text="¡Sé parte de SkyAlert Gold!"
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21-root-class-name10"
        ></Heading21>
        <BulletSoluciones11
          text="Conoce la probabilidad de lluvia en tu ubicación, ve las condiciones meteorológicas, pronóstico del día, pronóstico extendido, etc."
          heading="Consultar el estado del tiempo"
          rootClassName="bullet-soluciones11-root-class-name"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="Conoce el tiempo estimado en el que se comenzará a sentir un sismo en tu ubicación, para que actives los protocolos de protección adecuados conforme al tiempo con el que cuentas"
          heading="Alertas con el tiempo estimado de arribo de un sismo"
          rootClassName="bullet-soluciones11-root-class-name4"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="Recibe alertas donde quiera que te encuentres y mantente informado sobre la actividad sísmica en otros estados"
          heading="Alertas de sismos de acuerdo a tu ubicación GPS y hasta tres localidades más"
          rootClassName="bullet-soluciones11-root-class-name3"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="¡Navega por todas las secciones de la app sin publicidad, sin tener que configurar nada!"
          heading="Olvídate de los anuncios"
          rootClassName="bullet-soluciones11-root-class-name2"
        ></BulletSoluciones11>
        <BulletSoluciones11
          text="Personaliza alertas y notificaciones de otros peligros naturales, como tsunamis, tormentas y ciclones tropicales"
          heading="Alertas de peligros naturales"
          rootClassName="bullet-soluciones11-root-class-name1"
        ></BulletSoluciones11>
        <div className="app-container1"></div>
      </main>
      <img
        alt="image"
        src="/playground_assets/app_13-1500w.png"
        className="app-image1"
      />
      <h1 className="app-text">
        <span className="app-text1">
          Descarga #LaAlertaConfiable en la tienda de aplicaciones de acuerdo al
          Sistema Operativo de tu dispositivo móvil
        </span>
      </h1>
      <Mexiconaranja
        heading="Descarga"
        heading1="#LaAlertaConfiable"
        heading2="en la tienda"
        heading3=" "
        heading4="de aplicaciones de acuerdo al sistema "
        heading5="operativo de tu dispositivo móvil"
        rootClassName="mexiconaranja-root-class-name1"
      ></Mexiconaranja>
      <h1 className="app-text2">
        <span>¡Suscríbete y sé parte de la cultura de la prevención!</span>
      </h1>
      <Footer rootClassName="footer-root-class-name2"></Footer>
      <Copyright rootClassName="copyright-root-class-name2"></Copyright>
    </div>
  )
}

export default Appskyalert
