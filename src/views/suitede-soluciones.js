import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
import Heading21SEPARADOSSUBT1 from '../components/heading21s-e-p-a-r-a-d-o-s-s-u-b-t1'
import SkySOS from '../components/sky-s-o-s'
import Logosoluciones from '../components/logosoluciones'
import Solucionescard1 from '../components/solucionescard1'
import HeadingSkyAlert11 from '../components/heading-sky-alert11'
import BulletSoluciones from '../components/bullet-soluciones'
import Rightimg from '../components/rightimg'
import Leftimg from '../components/leftimg'
import HeadingSkyAlertDesk from '../components/heading-sky-alert-desk'
import HeadingSkyAlert360 from '../components/heading-sky-alert360'
import Bloques from '../components/bloques'
import HeadingSkyAlertSafety from '../components/heading-sky-alert-safety'
import Servidoraservidor from '../components/servidoraservidor'
import Servidoracliente from '../components/servidoracliente'
import Heading25 from '../components/heading25'
import Paquetes from '../components/paquetes'
import HeadingSkyAlertLabs from '../components/heading-sky-alert-labs'
import Heading21 from '../components/heading21'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './suitede-soluciones.css'

const SuitedeSoluciones = (props) => {
  return (
    <div className="suitede-soluciones-container">
      <Helmet>
        <title>
          Suite de Soluciones Que SkyAlert Puede Ofrecer a tu Empresa
        </title>
        <meta
          name="description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
        <meta
          property="og:title"
          content="Suite de Soluciones Que SkyAlert Puede Ofrecer a tu Empresa"
        />
        <meta
          property="og:description"
          content="Nuestra suite de soluciones está comprendido por múltiples servicios que evolucionarán a tu empresa en la concientización sobre seguridad sísmica."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name"></Navbarblack>
      <Breadcrum></Breadcrum>
      <div className="suitede-soluciones-container1">
        <main className="suitede-soluciones-main">
          <Heading21SEPARADOSSUBT1
            text="Suite de soluciones para alertamiento sísmico empresarial"
            text2="Recibe y envía la información crítica necesaria para que tu organización, por medio de la mejor tecnología, \npueda minimizar los impactos de los peligros naturales."
            text21="A través de nuestras innovadoras soluciones, tu empresa podrá tomar decisiones sustentadas, con tiempo e \ninformación suficientes para actuar y disminuir los riesgos."
            text211=" "
            image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
            rootClassName="heading21s-e-p-a-r-a-d-o-s-s-u-b-t1-root-class-name3"
          ></Heading21SEPARADOSSUBT1>
          <SkySOS rootClassName="sky-s-o-s-root-class-name"></SkySOS>
          <Logosoluciones rootClassName="logosoluciones-root-class-name"></Logosoluciones>
          <div className="suitede-soluciones-container2">
            <Solucionescard1
              image_src="/playground_assets/suite-de-soluciones_06-200h.jpg"
              rootClassName="solucionescard1-root-class-name13"
            ></Solucionescard1>
            <Solucionescard1
              image_src="/playground_assets/suite-de-soluciones_211-200h.jpg"
              rootClassName="solucionescard1-root-class-name12"
            ></Solucionescard1>
            <Solucionescard1
              image_src="/playground_assets/suite-de-soluciones_04-200h.jpg"
              rootClassName="solucionescard1-root-class-name14"
            ></Solucionescard1>
            <Solucionescard1
              image_src="/playground_assets/suite-de-soluciones_34-200h.png"
              rootClassName="solucionescard1-root-class-name16"
            ></Solucionescard1>
          </div>
          <HeadingSkyAlert11
            text="Solución de alertamiento sísmico temprano con dispositivo receptor Gadget; el dispositivo más moderno y rápido de México"
            text1="Activa bocinas, estrobos y luces, entre otros. Así tus colaboradores iniciarán con rapidez sus protocolos de prevención establecidos."
            text2="Dispositivo receptor de  alertamiento sísmico temprano para plantas industriales, corporativos, oficinas u organizaciones."
            text11=" "
            text12=" "
            heading="Gadget"
            heading1="SkyAlert"
            rootClassName="heading-sky-alert11-root-class-name2"
          ></HeadingSkyAlert11>
          <BulletSoluciones
            heading="Alerta áreas grandes, con alta concentración de personas, con un solo dispositivo"
            rootClassName="bullet-soluciones-root-class-name10"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Automatización de  procesos: suspensión de servicio de elevadores y escaleras eléctricas, pausa de procesos de producción, apertura de puertas y encendido de  luces de emergencia, entre otros"
            rootClassName="bullet-soluciones-root-class-name39"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="El dispositivo se otorga en comodato, el cual incluye el servicio de suscripción anual de alertamiento temprano. Solo pagas una única vez la instalación de la solución"
            rootClassName="bullet-soluciones-root-class-name12"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Únicamente necesitas una conexión a internet propia; o si lo prefieres nosotros te la proveemos *"
            rootClassName="bullet-soluciones-root-class-name11"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Recibe alertas de REDSkyAlert, con la tecnología más avanzada del mercado. Nuestra red de sensores sísmicos es la más grande, rápida y exclusiva; nadie más tiene acceso a ella\n"
            rootClassName="bullet-soluciones-root-class-name14"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Algoritmo propio desarrollado tomando en cuenta las características del territorio mexicano"
            rootClassName="bullet-soluciones-root-class-name16"
          ></BulletSoluciones>
          <Rightimg
            text="Abre puertas y enciende luces de emergencia. Suspende servicios de elevadores y escaleras eléctricas. Pausa servicios de producción."
            heading="Automatiza procesos"
            image_src="/playground_assets/icons8-escalator-down-100-200h.png"
            rootClassName="rightimg-root-class-name"
          ></Rightimg>
          <Leftimg
            text="Si requieres más bocinas, estorbos o luces para alertar de manera correcta todos tus espacios, nuestros expertos te asesorarán para implementarlos conforme a las mejores prácticas del mercado."
            heading="Periféricos"
            image_src="/playground_assets/icons8-alarm-100-200h.png"
            rootClassName="leftimg-root-class-name"
          ></Leftimg>
          <HeadingSkyAlertDesk
            text="Solución de alertamiento sísmico temprano con software receptor; software para computadoras"
            text11=" "
            text12=" "
            rootClassName="heading-sky-alert-desk-root-class-name"
          ></HeadingSkyAlertDesk>
          <BulletSoluciones
            heading="Se puede descargar en cualquier computadora con sistemas operativos Windows, Mac o Linux\n"
            rootClassName="bullet-soluciones-root-class-name1"
          ></BulletSoluciones>
          <BulletSoluciones rootClassName="bullet-soluciones-root-class-name15"></BulletSoluciones>
          <BulletSoluciones
            heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local\n"
            rootClassName="bullet-soluciones-root-class-name"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Muy fácil de instalar sin necesidad de implementar hardware externo"
            rootClassName="bullet-soluciones-root-class-name40"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Alertas más rápidas y precisas. Todos los usuarios reciben las notificaciones al mismo tiempo"
            rootClassName="bullet-soluciones-root-class-name2"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Envío de  mensajes corporativos clave; se pueden organizar en grupos desde un administrador"
            rootClassName="bullet-soluciones-root-class-name4"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Reporte inmediato de alertas recibidas desde cada receptor"
            rootClassName="bullet-soluciones-root-class-name3"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Monitoreo de dispositivos para garantizar la conectividad\n"
            rootClassName="bullet-soluciones-root-class-name5"
          ></BulletSoluciones>
          <img
            alt="image"
            src="/playground_assets/dam-800w.jpg"
            className="suitede-soluciones-image"
          />
          <div className="suitede-soluciones-container3">
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20tormenta%20info-300w.png"
              className="suitede-soluciones-image01"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20sismica-300w.png"
              className="suitede-soluciones-image02"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__alerta%20ciclon%20info-300w.png"
              className="suitede-soluciones-image03"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla__anuncio%20corporativo-300w.png"
              className="suitede-soluciones-image04"
            />
            <img
              alt="image"
              src="/playground_assets/desk_pantalla_simulacro-300w.png"
              className="suitede-soluciones-image05"
            />
          </div>
          <HeadingSkyAlert360
            text1="El planeta, en específico nuestra región, está sufriendo los efectos de peligros naturales con mayor frecuencia y cada vez más extremos."
            text2="Servicio de alertamiento temprano de otros peligros naturales."
            text11=" Atendiendo la necesidad de minimizar el riesgo de desastre, desarrollamos una nueva solución para ayudar a disminuir el impacto económico y social."
            text12=" Sociedades vulnerables, que están expuestas a estos peligros, tienen mayores afectaciones y pérdidas."
            heading="360"
            rootClassName="heading-sky-alert360-root-class-name"
          ></HeadingSkyAlert360>
          <div className="suitede-soluciones-container4"></div>
          <Bloques
            text="Tormentas severas, inundaciones, ciclones tropicales,\ntiempo invernal, olas de calor. \n"
            text1="De origen local, originado en costas de otros países \nque afecten a México."
            text2="Emisión de ceniza.\nCambio semáforo de alerta."
            heading="Alerta de otros "
            heading1=" "
            heading2=" peligros naturales "
            heading3="Meteorológicas"
            heading31="Tsunamis"
            heading32="Volcánicas"
            image_src="/playground_assets/icons8-wind-gauge-100-200h.png"
            heading311=" "
            image_src1="/playground_assets/icons8-tsunami-100-200h.png"
            image_src2="/playground_assets/icons8-volcano-100-200h.png"
            rootClassName="bloques-root-class-name"
          ></Bloques>
          <span className="suitede-soluciones-text">
            ¡Los desastres no son naturales!
          </span>
          <div className="suitede-soluciones-container5">
            <img
              alt="image"
              src="/playground_assets/b-400w.png"
              className="suitede-soluciones-image06"
            />
            <img
              alt="image"
              src="/playground_assets/c-400w.png"
              className="suitede-soluciones-image07"
            />
            <img
              alt="image"
              src="/playground_assets/d-400w.png"
              className="suitede-soluciones-image08"
            />
          </div>
          <span className="suitede-soluciones-text01">
            ¡Los desastres son sociales!
          </span>
          <HeadingSkyAlertSafety
            text1="¡Plataforma de uso exclusivo para administradores!"
            text2="Toma el control de toda la información"
            text11=" "
            text12=" "
            heading="Safety Admin"
            rootClassName="heading-sky-alert-safety-root-class-name"
          ></HeadingSkyAlertSafety>
          <BulletSoluciones
            heading="Plataforma diseñada para controlar todo desde un solo lugar: permisos, conectividad, reportes finales, entre otros\n"
            rootClassName="bullet-soluciones-root-class-name6"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Alta y baja de licencias y formas o métodos de pago \n"
            rootClassName="bullet-soluciones-root-class-name9"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Envío segmentado de información corporativa para todas las sucursales y todos sus gestores\n"
            rootClassName="bullet-soluciones-root-class-name7"
          ></BulletSoluciones>
          <BulletSoluciones
            heading="Visualización de eventos enviados a cada sucursal como: recepción de alertamiento temprano, reporte de daños y otros\n"
            rootClassName="bullet-soluciones-root-class-name8"
          ></BulletSoluciones>
          <div className="suitede-soluciones-container6"></div>
        </main>
      </div>
      <img
        alt="image"
        src="/playground_assets/crm-1200w.png"
        className="suitede-soluciones-image09"
      />
      <Servidoraservidor
        image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
        rootClassName="servidoraservidor-root-class-name"
      ></Servidoraservidor>
      <BulletSoluciones
        heading="Alertamiento segmentado, informativo  y rápido (&lt; 100 ms) recibido directamente en tu infraestructura\n"
        rootClassName="bullet-soluciones-root-class-name26"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local\n"
        rootClassName="bullet-soluciones-root-class-name31"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Cifrado punto a punto con robustos estándares de seguridad"
        rootClassName="bullet-soluciones-root-class-name30"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Pensado para sistemas existentes en producción; la integración de SkyAlert SaaS es segura, sencilla y transparente"
        rootClassName="bullet-soluciones-root-class-name29"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Úsalo out-of-the-box o solicita una integración personalizada a tu nube e infraestructura."
        rootClassName="bullet-soluciones-root-class-name28"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Ambiente de pruebas dedicado y soporte para equipos técnicos"
        rootClassName="bullet-soluciones-root-class-name27"
      ></BulletSoluciones>
      <img
        alt="image"
        src="/playground_assets/server-1400w.png"
        className="suitede-soluciones-image10"
      />
      <Servidoracliente
        image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
        rootClassName="servidoracliente-root-class-name"
      ></Servidoracliente>
      <BulletSoluciones
        heading="Alertamiento rápido (&lt; 100 ms) recibido directamente en dispositivos IoT"
        rootClassName="bullet-soluciones-root-class-name32"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Alertas con Tiempo Estimado de Arribo (TEA) e Intensidad Local"
        rootClassName="bullet-soluciones-root-class-name38"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Monitoreo de conexión y recepción de alertas"
        rootClassName="bullet-soluciones-root-class-name37"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Fácil integración a una amplia gama de tecnologías, usando protocolos estándar de comunicación IoT"
        rootClassName="bullet-soluciones-root-class-name36"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Sistema administrado de configuración remota"
        rootClassName="bullet-soluciones-root-class-name35"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Administración centralizada de dispositivos, lado a lado con otros receptores SkyAlert"
        rootClassName="bullet-soluciones-root-class-name34"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Ambiente de pruebas dedicado y soporte para equipos técnicos"
        rootClassName="bullet-soluciones-root-class-name33"
      ></BulletSoluciones>
      <Heading25
        text="Paquetes comerciales de soluciones"
        text2=" "
        rootClassName="heading25-root-class-name5"
      ></Heading25>
      <Paquetes rootClassName="paquetes-root-class-name"></Paquetes>
      <span className="suitede-soluciones-text02">Términos y condiciones</span>
      <div className="suitede-soluciones-container7">
        <span className="suitede-soluciones-text03">
          <span>Precios antes de IVA (16%)</span>
          <br></br>
          <span>Precios en Moneda Nacional (MXN)</span>
          <br></br>
          <span>
            Los paquetes comerciales no incluyen el servicio de instalación
          </span>
          <br></br>
          <span>
            Una licencia Desk genera una única descarga por equipo de cómputo
          </span>
          <br></br>
          <span>
            Una licencia sobre la plataforma Safety Admin incluye hasta 3
            usuarios administradores
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Precios y valores agregados sobre licencias Desk, SkyAlert App GOLD
            válidos por el periodo de lanzamiento de abril-noviembre de 2022
          </span>
          <br></br>
          <span></span>
        </span>
      </div>
      <HeadingSkyAlertLabs
        text1=" "
        text2="Laboratorio de tecnología avanzada"
        text11=" "
        text12=" "
        heading="Labs"
        rootClassName="heading-sky-alert-labs-root-class-name"
      ></HeadingSkyAlertLabs>
      <BulletSoluciones
        heading="En este programa creamos e innovamos soluciones únicas que están orientadas al alertamiento de múltiples peligros naturales\n"
        rootClassName="bullet-soluciones-root-class-name17"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Nuestros clientes clave participan en una Prueba de Concepto (Proof of Concept - POC) de los productos y soluciones  beta que se están desarrollando\n"
        rootClassName="bullet-soluciones-root-class-name18"
      ></BulletSoluciones>
      <BulletSoluciones
        text1="Contamos con el apoyo de organismos internacionales que avalan nuestros desarrollos\n"
        heading="Contamos con el apoyo de organismos internacionales que avalan nuestros desarrollos"
        rootClassName="bullet-soluciones-root-class-name19"
      ></BulletSoluciones>
      <div className="suitede-soluciones-container8">
        <img
          alt="image"
          src="/playground_assets/lab1-1400w.png"
          className="suitede-soluciones-image11"
        />
      </div>
      <Heading21
        text="Beneficio SkyAlert Labs"
        text2="Como resultado, al finalizar la fase beta, tendrás una solución de alto impacto en la prevención de riesgos de desastres."
        image_src="/playground_assets/skyalert-%5B2%5D_22-300h.jpg"
        rootClassName="heading21-root-class-name3"
      ></Heading21>
      <BulletSoluciones
        heading="Ponemos a tu disposición lo mejor de SkyAlert anticipadamente"
        rootClassName="bullet-soluciones-root-class-name20"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Serás el primero en conocer nuestra tecnología más avanzada"
        rootClassName="bullet-soluciones-root-class-name25"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Participa con nuestros expertos en la personalización de las nuevas soluciones o servicios"
        rootClassName="bullet-soluciones-root-class-name24"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Acceso a precios preferenciales durante las pruebas de concepto y pruebas piloto"
        rootClassName="bullet-soluciones-root-class-name23"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Conversión a servicio regular al terminar las pruebas de concepto con una solución específicamente orientada a tus necesidades"
        rootClassName="bullet-soluciones-root-class-name22"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Seguimiento post-implementación para evaluar la evolución del proyecto"
        rootClassName="bullet-soluciones-root-class-name21"
      ></BulletSoluciones>
      <Heading21SEPARADOSSUBT1
        text="Propuestas de valor agregado para tu empresa"
        text2="Además del servicio de alertamiento sísmico para tu empresa, también te capacitamos en procesos de Protección Civil."
        text21=" "
        text211=" "
        image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
        rootClassName="heading21s-e-p-a-r-a-d-o-s-s-u-b-t1-root-class-name4"
      ></Heading21SEPARADOSSUBT1>
      <img
        alt="image"
        src="/playground_assets/civil2-1200w.png"
        className="suitede-soluciones-image12"
      />
      <span className="suitede-soluciones-text11">
        Te brindamos el conocimiento para que tus brigadas estén preparadas ante
        emergencias originadas por:
      </span>
      <BulletSoluciones
        heading="Sismos"
        rootClassName="bullet-soluciones-root-class-name13"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Tormentas y ciclones"
        rootClassName="bullet-soluciones-root-class-name43"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Incendios y explosiones\n"
        rootClassName="bullet-soluciones-root-class-name42"
      ></BulletSoluciones>
      <h1 className="suitede-soluciones-text12">Modulos disponibles</h1>
      <BulletSoluciones
        text1="1. Comunicación de la emergencia\n"
        heading="Comunicación de la emergencia\n"
        rootClassName="bullet-soluciones-root-class-name44"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Integración de brigadas multifuncionales\n"
        rootClassName="bullet-soluciones-root-class-name46"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Brigada de evacuación\n"
        rootClassName="bullet-soluciones-root-class-name45"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Brigada de primeros auxilios\n"
        rootClassName="bullet-soluciones-root-class-name50"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Brigada de prevención y combate de incendio\n"
        rootClassName="bullet-soluciones-root-class-name49"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Brigada de búsqueda y rescate\n"
        rootClassName="bullet-soluciones-root-class-name48"
      ></BulletSoluciones>
      <BulletSoluciones
        heading="Materiales peligrosos\n"
        rootClassName="bullet-soluciones-root-class-name47"
      ></BulletSoluciones>
      <Heading21
        text="Hablemos de soluciones empresariales"
        text2="Tenemos la solución precisa para tu empresa. En breve, un asesor se comunicará contigo."
        image_src="/playground_assets/skyalert-%5B2%5D_04-300h.png"
        rootClassName="heading21-root-class-name19"
      ></Heading21>
      <Footer rootClassName="footer-root-class-name1"></Footer>
      <Copyright rootClassName="copyright-root-class-name"></Copyright>
    </div>
  )
}

export default SuitedeSoluciones
