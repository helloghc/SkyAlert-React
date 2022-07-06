import React from 'react'

import { Helmet } from 'react-helmet'

import Navbarblack from '../components/navbarblack'
import Breadcrum from '../components/breadcrum'
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
      <Breadcrum
        text2="Blog"
        rootClassName="breadcrum-root-class-name1"
      ></Breadcrum>
      <div className="blog-container1">
        <Cardblog
          image_src="/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58%20%5B1%5D-600h.jpeg"
          rootClassName="cardblog-root-class-name"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58%20%5B2%5D-600h.jpeg"
          rootClassName="cardblog-root-class-name1"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/whatsapp%20image%202022-07-01%20at%2016.04.58-600h.jpeg"
          rootClassName="cardblog-root-class-name2"
        ></Cardblog>
      </div>
      <div className="blog-container2">
        <Cardblog
          image_src="/playground_assets/photo1656710611%20%5B1%5D-600h.jpeg"
          rootClassName="cardblog-root-class-name6"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/photo1656710611%20%5B2%5D-600h.jpeg"
          rootClassName="cardblog-root-class-name7"
        ></Cardblog>
        <Cardblog
          image_src="/playground_assets/photo1656710611-600h.jpeg"
          rootClassName="cardblog-root-class-name8"
        ></Cardblog>
      </div>
      <main className="blog-main">
        <div className="blog-container3"></div>
      </main>
      <Footer rootClassName="footer-root-class-name6"></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Blog
