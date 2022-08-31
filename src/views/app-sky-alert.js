import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import BulletSoluciones11 from '../components/bullet-soluciones11'
import Copyright from '../components/copyright'
import './app-sky-alert.css'

const AppSkyAlert = (props) => {
  return (
    <div className="app-sky-alert-container">
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
      <div className="app-sky-alert-container01">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text01">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text02">SkyAlert App</span>
      </div>
      <main className="app-sky-alert-main">
        <div className="app-sky-alert-container02">
          <div className="app-sky-alert-container03">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image"
            />
            <div className="app-sky-alert-container04">
              <h2 className="app-sky-alert-text03 heading2">
                <span>
                  La App de alertamiento sísmico más descargada en México
                </span>
                <span className="app-sky-alert-text05"></span>
              </h2>
              <span className="app-sky-alert-text06">
                Te ofrecemos la aplicación de prevención más innovadora del
                mercado, incluida la alerta sísmica que funciona gracias a la
                REDSkyAlert; la red de detección sísmica privada con mayor
                cobertura en México.
              </span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/app_07-1500w.jpg"
          className="app-sky-alert-image01"
        />
        <div className="app-sky-alert-container05">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
            className="app-sky-alert-image02 img_shii"
          />
          <div className="app-sky-alert-container06">
            <h2 className="app-sky-alert-text07 heading2">
              <span>
                Nuestros usuarios reconocen el valor de
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text09">SkyAlert App</span>
            </h2>
            <span className="app-sky-alert-text10">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="app-sky-alert-container07">
          <div className="app-sky-alert-container08">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text11">@LetiMorales18</span>
            <span className="app-sky-alert-text12">
              <span>26 de mayo 2022</span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text16">
              (Cobertura sismo Perú - Magnitud 7.2)
            </span>
            <span className="app-sky-alert-text17">
              <span className="app-sky-alert-text18">@SkyAlertMx</span>
              <span className="app-sky-alert-text19">
                {' '}
                Gracias por mantenernos informados si no fuera por ustedes,
                nunca nos enteraríamos de estos sucesos sin importar la hora del
                mismo, nos ayuda a prevenir, no estamos libres que suceda en
                nuestra localidad, estado o país
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container09">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon02"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text20">@CuakyWacky</span>
            <span className="app-sky-alert-text21">
              <span>
                Sismo 7 septiembre 2021
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text25">
              (Severo - Magnitud 7.1 en Acapulco, Gro)
            </span>
            <span className="app-sky-alert-text26">
              <span className="app-sky-alert-text27">
                Gracias
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text28">@SkyAlertMx</span>
              <span className="app-sky-alert-text29">
                {' '}
                por avisar segundos antes del
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text30">#sismo</span>
              <span className="app-sky-alert-text31">
                , me dio tiempo de poner a salvo a mis perritos y a mi 🥺🦮
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container10">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text32">
              @Kbo_Marquez
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text33">
              <span>Sismo 23 de junio 2020</span>
            </span>
            <span className="app-sky-alert-text35">
              (Severo - Magnitud 7.4 en Huatulco, Oax)
            </span>
            <span className="app-sky-alert-text36">
              <span className="app-sky-alert-text37">@SkyAlertMx</span>
              <span className="app-sky-alert-text38">
                {' '}
                Gracias SkyAlert me diste fácil 2 min para ponerme a salvo solo
                por eso ya me suscribí a gold (nuevamente).
              </span>
            </span>
          </div>
          <div className="app-sky-alert-container11">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon06"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <span className="app-sky-alert-text39">@jose_horror</span>
            <span className="app-sky-alert-text40">
              <span>Sismo 18 de febrero 2016</span>
              <span></span>
              <br></br>
              <span></span>
            </span>
            <span className="app-sky-alert-text44">
              (Severo - Magnitud 7.1 en Pinotepa Nacional, Oax)
            </span>
            <span className="app-sky-alert-text45">
              <span className="app-sky-alert-text46">#AlertaSísmica</span>
              <span className="app-sky-alert-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="app-sky-alert-text48">@SkyAlertMx</span>
              <span className="app-sky-alert-text49">
                . Estaba dando clases y me avisó con anticipación, puse a salvo
                a mis alumnos! Gracias!!
              </span>
            </span>
          </div>
        </div>
        <div className="app-sky-alert-container12">
          <h2 className="app-sky-alert-text50 heading2">
            <span className="app-sky-alert-text51">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text52">
              Tus suscripciones
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text53">
              hicieron posible que Chiapas, Veracruz, Morelos y Estado de
              México, tuvieran por primera vez un
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="app-sky-alert-text54">
              sistema de alertamiento sísmico
            </span>
            <span className="app-sky-alert-text55">.</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Con tu apoyo la cobertura seguirá creciendo.</span>
          </h2>
          <div className="app-sky-alert-container13">
            <span className="app-sky-alert-text60">
              Plataformas de descarga en donde puedes encontrar SkyAlert
            </span>
          </div>
        </div>
        <footer className="app-sky-alert-footer section-container">
          <div className="app-sky-alert-container14">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_40-300h.jpg"
              className="app-sky-alert-image03"
            />
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_42-300h.jpg"
              className="app-sky-alert-image04"
            />
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_44-300h.png"
              className="app-sky-alert-image05"
            />
          </div>
        </footer>
        <div className="app-sky-alert-container15">
          <div className="app-sky-alert-container16">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image06"
            />
            <div className="app-sky-alert-container17">
              <h2 className="app-sky-alert-text61 heading2">
                <span>Conoce los beneficios de SkyAlert App</span>
                <span className="app-sky-alert-text63"></span>
              </h2>
              <span className="app-sky-alert-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="app-sky-alert-container18">
          <div className="app-sky-alert-container19">
            <div className="app-sky-alert-card">
              <img
                alt="image"
                src="/playground_assets/icons8-alarm-100-200h.png"
                className="app-sky-alert-image07"
              />
              <h4 className="app-sky-alert-text65 heading4">
                Recibe alertas sísmicas
              </h4>
              <span className="app-sky-alert-text66 content-Light">
                Descarga la app más avanzada de alertamiento sísmico. Recibirás
                alertas con el tiempo estimado de arribo de un sismo con hasta 3
                minutos de anticipación*, aunque tu teléfono esté en modo
                &quot;No Molestar&quot;.
              </span>
            </div>
            <div className="app-sky-alert-card1">
              <img
                alt="image"
                src="/playground_assets/icons8-vibration-32-200h.png"
                className="app-sky-alert-image08"
              />
              <h4 className="app-sky-alert-text67 heading4">
                Intensidad Local
              </h4>
              <span className="app-sky-alert-text68 content-Light">
                Sólo recibirás alertas con la intensidad que se espera en tu
                ubicación.
              </span>
            </div>
            <div className="app-sky-alert-card2">
              <img
                alt="image"
                src="/playground_assets/icons8-gold-100-200h.png"
                className="app-sky-alert-image09"
              />
              <h4 className="app-sky-alert-text69 heading4">
                Obtén beneficios con SkyAlert GOLD
              </h4>
              <span className="app-sky-alert-text70 content-Light">
                Además de contar con intensidad en tu ubicación, también recibes
                el tiempo estimado de arribo y puedes agregar hasta 3
                ubicaciones adicionales
              </span>
            </div>
          </div>
          <div className="app-sky-alert-container20">
            <div className="app-sky-alert-card3">
              <img
                alt="image"
                src="/playground_assets/icons8-3d-touch-50-200h.png"
                className="app-sky-alert-image10"
              />
              <h4 className="app-sky-alert-text71 heading4">
                Filtro sísmico inteligente
              </h4>
              <span className="app-sky-alert-text72 content-Light">
                Con SkyAlert app, todos reciben alertas de sismos que pueden
                sentirse en su localidad.
              </span>
            </div>
            <div className="app-sky-alert-card4">
              <img
                alt="image"
                src="/playground_assets/icons8-clock-50-200h.png"
                className="app-sky-alert-image11"
              />
              <h4 className="app-sky-alert-text73 heading4">
                TEA (Tiempo Estimado de Arribo)
              </h4>
              <span className="app-sky-alert-text74 content-Light">
                Te notificamos cuántos segundos tienes antes de la llegada de un
                sismo a tu ubicación
              </span>
              <span>*Sólo usuarios Gold</span>
            </div>
            <div className="app-sky-alert-card5">
              <img
                alt="image"
                src="/playground_assets/icons8-volcano-100-200h.png"
                className="app-sky-alert-image12"
              />
              <h4 className="app-sky-alert-text76 heading4">
                Notificaciones de otros peligros naturales
              </h4>
              <span className="app-sky-alert-text77 content-Light">
                Actividad volcánica, tsunamis, sismos internacionales, eventos
                meteorológicos, entre otros.
              </span>
            </div>
          </div>
        </div>
        <div className="app-sky-alert-container21">
          <div className="app-sky-alert-container22">
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
              className="app-sky-alert-image13"
            />
            <div className="app-sky-alert-container23">
              <h2 className="app-sky-alert-text78 heading2">
                <span>¡Sé parte de SkyAlert Gold!</span>
                <span className="app-sky-alert-text80"></span>
              </h2>
              <span className="app-sky-alert-text81">
                Generamos confianza por la calidad de nuestros servicios.
              </span>
            </div>
          </div>
        </div>
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
        <div className="app-sky-alert-container24"></div>
      </main>
      <img
        alt="image"
        src="/playground_assets/app_12-1500w.png"
        className="app-sky-alert-image14"
      />
      <h1 className="app-sky-alert-text82">
        <span className="app-sky-alert-text83">
          Descarga #LaAlertaConfiable en la tienda de aplicaciones de acuerdo al
          Sistema Operativo de tu dispositivo móvil
        </span>
      </h1>
      <h1 className="app-sky-alert-text84">
        <span>
          Descarga
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="app-sky-alert-text86">#LaAlertaConfiable</span>
        <span>
          {' '}
          en la tienda de aplicaciones, de acuerdo al Sistema Operativo de tu
          móvil
        </span>
      </h1>
      <h1 className="app-sky-alert-text88">
        <span>¡Suscríbete y sé parte de la cultura de la prevención!</span>
      </h1>
      <footer className="app-sky-alert-footer1 section-container">
        <div className="app-sky-alert-container25">
          <img
            alt="image"
            src="/playground_assets/logo1-400h.png"
            className="app-sky-alert-image15"
          />
        </div>
        <div className="app-sky-alert-container26">
          <a
            href="https://play.google.com/store/apps/details?id=com.disappster.skyalert&amp;hl=es_419"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_40-300h.jpg"
              className="app-sky-alert-image16"
            />
          </a>
          <a
            href="https://apps.apple.com/mx/app/skyalert/id774381416?l=en"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link1"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_42-300h.jpg"
              className="app-sky-alert-image17"
            />
          </a>
          <a
            href="https://appgallery.huawei.com/#/app/C102311417"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link2"
          >
            <img
              alt="image"
              src="/playground_assets/skyalert-%5B2%5D_44-300h.png"
              className="app-sky-alert-image18"
            />
          </a>
        </div>
        <div className="app-sky-alert-container27">
          <a
            href="https://www.facebook.com/SkyAlertMx/"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link3"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="app-sky-alert-icon08"
            >
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/skyalertmx"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link4"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="app-sky-alert-icon10"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/skyalertmx/"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link5"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="app-sky-alert-icon12"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UCJwJrlu4G7kmOKyoVXzUhbA"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link6"
          >
            <svg viewBox="0 0 1024 1024" className="app-sky-alert-icon14">
              <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/skyalert-mx/"
            target="_blank"
            rel="noreferrer noopener"
            className="app-sky-alert-link7"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="app-sky-alert-icon16"
            >
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </a>
        </div>
        <span className="app-sky-alert-text90 content-Light">
          <span>Términos y Condiciones de Uso</span>
          <br></br>
          <span>Aviso de privacidad</span>
          <br></br>
          <span></span>
        </span>
      </footer>
      <Copyright rootClassName="copyright-root-class-name2"></Copyright>
    </div>
  )
}

export default AppSkyAlert
