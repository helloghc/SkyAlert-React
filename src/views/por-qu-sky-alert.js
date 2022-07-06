import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
import Heading21SEPARADOSSUBT1 from '../components/heading21s-e-p-a-r-a-d-o-s-s-u-b-t1'
import Heading3 from '../components/heading3'
import Heading25 from '../components/heading25'
import Bloqueslineales from '../components/bloqueslineales'
import SkyAlertOtros from '../components/sky-alert-otros'
import BulletTablaodd from '../components/bullet-tablaodd'
import BulletTablao from '../components/bullet-tablao'
import BulletTablaodd1 from '../components/bullet-tablaodd1'
import BulletTablao1 from '../components/bullet-tablao1'
import Mexiconaranja from '../components/mexiconaranja'
import Alianzas from '../components/alianzas'
import Pornuestrogran from '../components/pornuestrogran'
import Alianzas1 from '../components/alianzas1'
import DosImgenesallado from '../components/dos-imgenesallado'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './por-qu-sky-alert.css'

const PorQuSkyAlert = (props) => {
  return (
    <div className="por-qu-sky-alert-container">
      <Helmet>
        <title>¿Alerta Sísmica en México? SkyAlert lo Puede Anticipar</title>
        <meta
          name="description"
          content="Haz clic aquí para conocer a SkyAlert. Somos una empresa dedicada a enviar todo tipo de Alertas Sísmicas en México. ¡Anticípate a todo!"
        />
        <meta
          property="og:title"
          content="¿Alerta Sísmica en México? SkyAlert lo Puede Anticipar"
        />
        <meta
          property="og:description"
          content="Haz clic aquí para conocer a SkyAlert. Somos una empresa dedicada a enviar todo tipo de Alertas Sísmicas en México. ¡Anticípate a todo!"
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name3"></Navbarblack>
      <Breadcrum text2="¿Por qué SkyAlert?"></Breadcrum>
      <Heading21SEPARADOSSUBT1
        text="Soluciones de alertamiento sísmico y otros peligros naturales"
        text2="Nuestro objetivo es brindarte las herramientas adecuadas para que puedas estar prevenido ante un evento sísmico o cualquier otro peligro natural."
        text21="El desarrollo y las soluciones tecnológicas de SkyAlert nos permiten ofrecer el servicio a empresas, organizaciones y particulares."
        text211=" "
        rootClassName="heading21s-e-p-a-r-a-d-o-s-s-u-b-t1-root-class-name"
      ></Heading21SEPARADOSSUBT1>
      <Heading3 rootClassName="heading3-root-class-name1"></Heading3>
      <img
        alt="image"
        src="/playground_assets/por-que%CC%81-skyalert_03-1500w.png"
        className="por-qu-sky-alert-image"
      />
      <main className="por-qu-sky-alert-main">
        <div className="por-qu-sky-alert-container1"></div>
      </main>
      <Heading25
        text="¿Qué beneficios ofrece SkyAlert?"
        text2="Somos una empresa mexicana con presencia internacional que, desde 2011, ha desarrollado tecnologías con la mayor innovación para alertamiento sísmico y de otros peligros naturales, siendo así el único sistema de alertamiento privado que cuenta con la base legal para operar sin restricciones."
        image_src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
        rootClassName="heading25-root-class-name"
      ></Heading25>
      <Bloqueslineales rootClassName="bloqueslineales-root-class-name"></Bloqueslineales>
      <SkyAlertOtros
        image_src1="/playground_assets/logo1-200h.png"
        rootClassName="sky-alert-otros-root-class-name"
      ></SkyAlertOtros>
      <BulletTablaodd
        text="Red CIRES / Pública"
        heading="Red de sensores"
        image_src="/playground_assets/1-200h.png"
        image_src1="/playground_assets/descarga-200h.png"
        rootClassName="bullet-tablaodd-root-class-name6"
      ></BulletTablaodd>
      <BulletTablao
        text="6"
        heading="Estados con cobertura"
        image_src="/playground_assets/2-200h.png"
        rootClassName="bullet-tablao-root-class-name"
      ></BulletTablao>
      <BulletTablao
        heading="Alerta los estados completos"
        image_src="/playground_assets/3-200h.png"
        rootClassName="bullet-tablao-root-class-name13"
      ></BulletTablao>
      <BulletTablao
        heading="Cobertura exclusiva en Estado de México, Morelos, Chiapas y Veracruz"
        image_src="/playground_assets/4-200h.png"
        rootClassName="bullet-tablao-root-class-name12"
      ></BulletTablao>
      <BulletTablao
        text="Onda de Radio"
        heading="Conectividad"
        image_src="/playground_assets/5-200h.png"
        rootClassName="bullet-tablao-root-class-name11"
      ></BulletTablao>
      <BulletTablao
        heading="Alertas más rápidas"
        image_src="/playground_assets/6-200h.png"
        rootClassName="bullet-tablao-root-class-name10"
      ></BulletTablao>
      <BulletTablao
        heading="Alertas con Tiempo Estimado de Arribo (TEA)"
        image_src="/playground_assets/7-200h.png"
        rootClassName="bullet-tablao-root-class-name9"
      ></BulletTablao>
      <BulletTablao
        heading="Servicios multialerta"
        image_src="/playground_assets/8-200h.png"
        rootClassName="bullet-tablao-root-class-name8"
      ></BulletTablao>
      <BulletTablao
        heading="Alertas con intensidad local"
        image_src="/playground_assets/3-200h.png"
        rootClassName="bullet-tablao-root-class-name7"
      ></BulletTablao>
      <BulletTablao
        heading="Presencia internacional"
        image_src="/playground_assets/9-200h.png"
        rootClassName="bullet-tablao-root-class-name6"
      ></BulletTablao>
      <BulletTablaodd1
        heading="Automatización de procesos"
        image_src="/playground_assets/10-200h.png"
        rootClassName="bullet-tablaodd1-root-class-name"
      ></BulletTablaodd1>
      <BulletTablao
        heading="Transparencia en los cobros"
        image_src="/playground_assets/11-200h.png"
        rootClassName="bullet-tablao-root-class-name4"
      ></BulletTablao>
      <BulletTablao
        heading="Mantenimiento y comunicación constante"
        image_src="/playground_assets/12-200h.png"
        rootClassName="bullet-tablao-root-class-name3"
      ></BulletTablao>
      <BulletTablao1
        heading="Panel de administración web"
        image_src="/playground_assets/13-200h.png"
        rootClassName="bullet-tablao1-root-class-name"
      ></BulletTablao1>
      <BulletTablao
        heading="Innovación y actualización vía remota"
        image_src="/playground_assets/14-200h.png"
        rootClassName="bullet-tablao-root-class-name1"
      ></BulletTablao>
      <Mexiconaranja rootClassName="mexiconaranja-root-class-name"></Mexiconaranja>
      <Alianzas rootClassName="alianzas-root-class-name"></Alianzas>
      <Pornuestrogran
        heading="Por nuestro gran avance e innovación,"
        rootClassName="pornuestrogran-root-class-name"
      ></Pornuestrogran>
      <h1 className="por-qu-sky-alert-text">
        Por nuestro gran avance e innovación, SkyAlert ha sido merecedor de
        diferentes reconocimientos a nivel nacional e internacional
      </h1>
      <Alianzas
        text1='Recibimos dos reconocimientos en las categorías: "Apoyo y Compromiso Social" y "Estrategias de Respuesta y Adaptación"'
        text11="Empresas que buscan cambiar la forma de trabajar"
        image_src="/playground_assets/por-que%CC%81-skyalert_15-200w.png"
        image_src1="/playground_assets/por-que%CC%81-skyalert_18-200h.png"
        image_src2="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        image_src3="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        rootClassName="alianzas-root-class-name1"
      ></Alianzas>
      <Alianzas
        text1="StartUp Endeavor Internacional 2015"
        text11="30 Promesas de los Negocios FORBES 2017"
        image_src="/playground_assets/por-que%CC%81-skyalert_341-200h.png"
        image_src1="/playground_assets/por-que%CC%81-skyalert_23-200h.png"
        image_src2="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        image_src3="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        rootClassName="alianzas-root-class-name3"
      ></Alianzas>
      <Alianzas
        text1="Premio Nacional del Emprendedor en Alto Impacto 2015, por el Instituto Nacional del Emprendedor"
        text11="Latam Microsoft Partner of the Year Award 2014"
        image_src="/playground_assets/por-que%CC%81-skyalert_31-200h.png"
        image_src1="/playground_assets/por-que%CC%81-skyalert_34-200h.png"
        image_src2="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        image_src3="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        rootClassName="alianzas-root-class-name2"
      ></Alianzas>
      <Alianzas1
        text1="MIT Innovadores menores de 35 México"
        image_src="/playground_assets/por-que%CC%81-skyalert_39-200h.png"
        image_src2="/playground_assets/por-que%CC%81-skyalert_19-200h.png"
        rootClassName="alianzas1-root-class-name"
      ></Alianzas1>
      <Heading25
        text="¡SkyAlert en Estados Unidos de Norteamérica!"
        text2="La universidad de Berkeley, por medio de su aceleradora de negocios SkyDesk, seleccionó a SkyAlert para ser proveedor de la alerta sísmica masiva en California, Estados Unidos de Norteamérica"
        image_src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
        rootClassName="heading25-root-class-name1"
      ></Heading25>
      <DosImgenesallado rootClassName="dos-imgenesallado-root-class-name"></DosImgenesallado>
      <Heading25
        text="Empresas que también confían en SkyAlert"
        text2="Generamos confianza en aquellos en lo que ponemos la nuestra"
        image_src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
        rootClassName="heading25-root-class-name2"
      ></Heading25>
      <img
        alt="image"
        src="/playground_assets/skyalert-%5B2%5D_121-1500w.png"
        className="por-qu-sky-alert-image1"
      />
      <Footer rootClassName="footer-root-class-name4"></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default PorQuSkyAlert
