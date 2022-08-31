import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Component6 from '../components/component6'
import Component7 from '../components/component7'
import Component8 from '../components/component8'
import Cardblog from '../components/cardblog'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>No te Pierdas Las Novedades Que SkyAlert Tiene Para ti</title>
        <meta
          name="description"
          content="Conoce todo lo nuevo que SkyAlert tiene para ti. Haz clic aquí para no quedarte afuera de las actualizaciones que constantemente estamos publicando."
        />
        <meta
          property="og:title"
          content="No te Pierdas Las Novedades Que SkyAlert Tiene Para ti"
        />
        <meta
          property="og:description"
          content="Conoce todo lo nuevo que SkyAlert tiene para ti. Haz clic aquí para no quedarte afuera de las actualizaciones que constantemente estamos publicando."
        />
      </Helmet>
      <Navbarblack rootClassName="navbarblack-root-class-name5"></Navbarblack>
      <div className="blog-container1">
        <span>
          Home
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="blog-text1">
          {' '}
          /
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="blog-text2">SkyAlert News</span>
      </div>
      <div className="blog-container2">
        <div className="blog-container3">
          <img
            alt="image"
            src="/playground_assets/skyalert-%5B2%5D_04-200w.png"
            className="blog-image img_shii"
          />
          <div className="blog-container4">
            <h2 className="blog-text3 heading2">
              <span>
                Portal de noticias
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="blog-text5">SkyAlert</span>
            </h2>
            <span className="blog-text6">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="blog-container5">
        <Component6></Component6>
        <Component7></Component7>
        <Component8></Component8>
      </div>
      <div className="blog-container6">
        <Cardblog
          image_src="/playground_assets/photo1656710611%20%5B1%5D-1400w.jpeg"
          rootClassName="cardblog-root-class-name6"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/photo1656710611%20%5B2%5D-1400w.jpeg"
          rootClassName="cardblog-root-class-name7"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/photo1656710611-1400w.jpeg"
          rootClassName="cardblog-root-class-name8"
        ></Cardblog>
      </div>
      <main className="blog-main">
        <div className="blog-container7"></div>
      </main>
      <Footer rootClassName="footer-root-class-name6"></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Blog
