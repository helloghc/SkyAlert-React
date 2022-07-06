import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Heading2 from '../components/heading2'
import Testimoniales from '../components/testimoniales'
import Heading21 from '../components/heading21'
import FeatureCard from '../components/feature-card'
import Heading3 from '../components/heading3'
import Heading21SEPARADOSSUBT1 from '../components/heading21s-e-p-a-r-a-d-o-s-s-u-b-t1'
import MaxWidth from '../components/max-width'
import Heading31 from '../components/heading31'
import Social from '../components/social'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sistema de Alertamiento Sísmico: Seguridad Garantizada</title>
        <meta
          name="description"
          content="Sistema de alertamiento sísmico que detecta los eventos momentos antes de que se produzcan y notifica a los usuarios en peligro. ¡Conócelo!"
        />
        <meta
          property="og:title"
          content="Sistema de Alertamiento Sísmico: Seguridad Garantizada"
        />
        <meta
          property="og:description"
          content="Sistema de alertamiento sísmico que detecta los eventos momentos antes de que se produzcan y notifica a los usuarios en peligro. ¡Conócelo!"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span>
                  Soluciones de alertamiento sísmico y otros peligros naturales
                </span>
              </h1>
              <span className="home-text2">
                <span>
                  Somos una empresa dedicada al desarrollo de soluciones
                  tecnológicas para el alertamiento sísmico y otros peligros
                  naturales,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  con más de 10 años de experiencia en innovación a favor de la
                  prevención.
                </span>
                <br></br>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/skyalert-%5B2%5D_03-1100w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <Heading2
          text2="Generamos confianza por la calidad de nuestros servicios."
          rootClassName="heading2-root-class-name"
        ></Heading2>
        <div className="home-container1">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_121-1000w.png"
            className="home-image1"
          />
        </div>
        <div className="home-testimonial">
          <Heading2
            text="Nuestros clientes reconocen nuestro valor  "
            text1=" "
            text2=" "
            rootClassName="heading2-root-class-name2"
          ></Heading2>
        </div>
        <Testimoniales rootClassName="testimoniales-root-class-name"></Testimoniales>
        <Heading21
          text="Alertamiento sísmico para empresas"
          text2="¿Qué harías con hasta 3 minutos* antes de un sismo?"
          rootClassName="heading21-root-class-name"
        ></Heading21>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-cards-container">
              <FeatureCard
                text="Pausa procesos críticos de producción, \nenciende luces de emergencia. \nTambién suspende servicios como \nsuministro de gas, elevadores y \nescaleras eléctricas."
                heading="Prevención en tu organización"
                image_src="/playground_assets/icons8-organization-chart-people-80-200h.png"
                rootClassName="feature-card-root-class-name2"
              ></FeatureCard>
              <FeatureCard
                text="Monitorea tus dispositivos receptores, \nrealiza o programa simulacros desde el panel de administración “Safety Admin”."
                text1="See how &gt;"
                heading="Prevención en todo momento\n"
                image_src="/playground_assets/icons8-calendar-15-50-200h.png"
                rootClassName="feature-card-root-class-name1"
              ></FeatureCard>
              <FeatureCard
                text="Las alertas sísmicas las podrás recibir con\nhasta 3 minutos* antes del evento sísmico, \nde acuerdo con el epicentro.\n*Tiempo máximo para CDMX desde \nTapachula, Chiapas."
                text1="Learn more &gt;"
                heading="Alertas Anticipadas\n"
                image_src="/playground_assets/icons8-alarm-100-200h.png"
                rootClassName="feature-card-root-class-name"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <Heading3 rootClassName="heading3-root-class-name"></Heading3>
        <Heading21SEPARADOSSUBT1
          text="SkyAlert App (uso personal)"
          text2="Lleva #LaAlertaConfiable en tu celular para que siempre estés prevenido ante sismos."
          text21="Más de 10.000.000 de descargas"
          text211="Más de 500 sismos alertados"
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21s-e-p-a-r-a-d-o-s-s-u-b-t1-root-class-name1"
        ></Heading21SEPARADOSSUBT1>
        <MaxWidth
          text1='Descarga la app más avanzada de alertamiento sísmico. Recibirás alertas con el tiempo estimado de arribo de un sismo con hasta 3 minutos de anticipación*, aunque tu teléfono esté en modo "No Molestar"  (exclusivo para usuarios GOLD).'
          text11="Con SkyAlert 4, todos reciben alertas de sismos que puedan sentirse en su localidad."
          text12="Navega sin anuncios, recibe el tiempo estimado de arribo y agrega hasta 3 ubicaciones adicionales, además de tu GPS."
          text13="Todas las alertas se filtran automáticamente, así solo recibirás alertas con la intensidad que se espera en tu ubicación."
          text111="Actividad volcánica, tsunamis, sismos internacionales, eventos meteorológicos, entre otros."
          text112="Te notificamos cuántos segundos tienes antes de la llegada de un sismo a tu ubicación."
          heading1="Recibe alertas sísmicas"
          heading11="Filtro sísmico inteligente"
          heading12="Obtén beneficios con SkyAlert Gold"
          heading13="Intensidad local"
          heading111="Notificaciones de otros peligros naturales"
          heading112="TEA (Tiempo Estimado de Arribo)"
          image_src1="/playground_assets/icons8-alarm-100-200h.png"
          image_src11="/playground_assets/icons8-3d-touch-50-200h.png"
          image_src12="/playground_assets/icons8-gold-100-200h.png"
          image_src13="/playground_assets/icons8-vibration-32-200h.png"
          image_src111="/playground_assets/icons8-volcano-100-200h.png"
          image_src112="/playground_assets/icons8-clock-50-200h.png"
          rootClassName="max-width-root-class-name"
        ></MaxWidth>
        <Heading31 rootClassName="heading31-root-class-name"></Heading31>
        <div className="home-container2">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_40-200h.jpg"
            className="home-image2"
          />
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_42-200h.jpg"
            className="home-image3"
          />
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_44-200h.png"
            className="home-image4"
          />
        </div>
        <Heading21SEPARADOSSUBT1
          text="¿Qué es la REDSkyAlert y cómo funciona?"
          text2="Con más de 120 sensores sísmicos, es la única red privada para la detección de sismos que cubre más del 80% de las zonas de mayor peligro sísmico en México. REDSkyAlert es fuente propia para nuestras alertas sísmicas que cuenta con la capacidad de confirmar o descartar un sismo en tan solo milisegundos."
          text21="¡REDSkyAlert cuenta con la cobertura más grande de todo México!"
          text211=" "
          image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
          rootClassName="heading21s-e-p-a-r-a-d-o-s-s-u-b-t1-root-class-name2"
        ></Heading21SEPARADOSSUBT1>
        <img
          alt="image"
          src="/playground_assets/skyalert-%5B2%5D_56-1200w.png"
          className="home-image5"
        />
        <Heading21
          text="Súmate a la comunidad SkyAlert"
          text2="Publicamos la mejor información de manera oportuna y veraz."
          rootClassName="heading21-root-class-name1"
        ></Heading21>
        <Social
          image_src="/playground_assets/10-200h.png"
          image_src1="/playground_assets/skyalert-%5B2%5D_64-800h.png"
          image_src2="/playground_assets/skyalert-%5B2%5D_70-800h.png"
          image_src3="/playground_assets/skyalert-%5B2%5D_60-800h.png"
          image_src4="/playground_assets/skyalert-%5B2%5D_62-800h.png"
          image_src11="/playground_assets/skyalert-%5B2%5D_73-800h.png"
          rootClassName="social-root-class-name"
        ></Social>
        <Heading21
          text="¡SkyAlert es una empresa excepcional!"
          text2="Gracias a nuestro proyecto “Reactivando México” fuimos reconocidos como una Empresa Excepcional."
          rootClassName="heading21-root-class-name2"
        ></Heading21>
        <iframe
          id="youtube skyalert"
          src="https://www.youtube.com/embed/_t4vL_VK3II?start=1"
          allow="autoplay"
          allowFullScreen
          className="home-iframe"
        ></iframe>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
      <Copyright rootClassName="copyright-root-class-name3"></Copyright>
    </div>
  )
}

export default Home
