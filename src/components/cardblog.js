import React from 'react'

import PropTypes from 'prop-types'

import './cardblog.css'

const Cardblog = (props) => {
  return (
    <div className={`cardblog-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="cardblog-image"
      />
      <span className="cardblog-text">{props.text1}</span>
      <h1 className="cardblog-text1">{props.heading}</h1>
      <button className="cardblog-button button">{props.button}</button>
    </div>
  )
}

Cardblog.defaultProps = {
  button: 'Leer más',
  heading:
    '5 maneras en que un sistema de alerta temprana para sismos ayudar a tus empleados minimizar riesgos durante un sismo',
  rootClassName: '',
  image_src: '/playground_assets/blog_04-1400w.jpg',
  image_alt: 'image',
  text1: '20 julio 2022',
}

Cardblog.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default Cardblog
