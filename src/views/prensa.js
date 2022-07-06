import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
import Entrevistas from '../components/entrevistas'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './prensa.css'

const Prensa = (props) => {
  return (
    <div className="prensa-container">
      <Helmet>
        <title>
          La Empresa de Alertamiento Sísmico de México en Los Medios
        </title>
        <meta
          name="description"
          content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
        />
        <meta
          property="og:title"
          content="La Empresa de Alertamiento Sísmico de México en Los Medios"
        />
        <meta
          property="og:description"
          content="Haz clic en este enlace para conocer qué están diciendo los medios de comunicación de nuestra empresa de alertamiento sísmico."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name6"></Navbarblack>
      <Breadcrum text2="Prensa"></Breadcrum>
      <Entrevistas
        text="México es un país con alta actividad sísmica, además de enfrentar peligros naturales, desde erupciones volcánicas hasta tormentas, por lo que es fundamental permear la cultura de la prevención y además expandirla a otros países que también sufren estos eventos"
        text1="SkyAlert cumple 10 años con ganas de expandirse a Sudamérica"
        text2="Después de que SkyAlert cumpliera 10 años de vida, el camino para la empresa continúa con más y mejores innovaciones, por lo que Álvaro Velasco, CEO de SkyAlert en México y Estados Unidos,conversó con José Antonio Pontón en MVS 102.5 sobre esta década y el futuro"
        text11="SkyAlert será el aliado en prevención de México y Latinoamérica"
        image_src="/playground_assets/prensa_15-500h.png"
        image_src1="/playground_assets/prensa_04-500h.png"
        rootClassName="entrevistas-root-class-name3"
      ></Entrevistas>
      <Entrevistas
        text="México es un país con alta actividad sísmica, además de enfrentar peligros naturales, desde erupciones volcánicas hasta tormentas, por lo que es fundamental permear la cultura de la prevención y además expandirla a otros países que también sufren estos eventos"
        text1="Con una nueva era delante de nosotros, SkyAlert consolida nuevos proyectos en México y USA"
        text2="México es un país con alta actividad sísmica, además de enfrentar peligros naturales, desde erupciones volcánicas hasta tormentas, por lo que es fundamental permear la cultura de la prevención y además expandirla a otros países que también sufren estos eventos"
        text11="SkyAlert: Acelerar procesos y transparentar objetivos clave para sobrevivir durante la pandemia"
        image_src="/playground_assets/prensa_15-500h.png"
        image_src1="/playground_assets/prensa_09-500h.png"
        rootClassName="entrevistas-root-class-name4"
      ></Entrevistas>
      <Entrevistas
        text="México es un país con alta actividad sísmica, además de enfrentar peligros naturales, desde erupciones volcánicas hasta tormentas, por lo que es fundamental permear la cultura de la prevención y además expandirla a otros países que también sufren estos eventos"
        text1="Con una nueva era delante de nosotros, SkyAlert consolida nuevos proyectos en México y USA"
        text2="México es un país con alta actividad sísmica, además de enfrentar peligros naturales, desde erupciones volcánicas hasta tormentas, por lo que es fundamental permear la cultura de la prevención y además expandirla a otros países que también sufren estos eventos"
        text11="SkyAlert: Acelerar procesos y transparentar objetivos clave para sobrevivir durante la pandemia"
        image_src="/playground_assets/prensa_15-500h.png"
        image_src1="/playground_assets/prensa_17-500h.png"
        rootClassName="entrevistas-root-class-name5"
      ></Entrevistas>
      <main className="prensa-main">
        <div className="prensa-container1"></div>
      </main>
      <Footer rootClassName="footer-root-class-name7"></Footer>
      <Copyright rootClassName="copyright-root-class-name1"></Copyright>
    </div>
  )
}

export default Prensa
