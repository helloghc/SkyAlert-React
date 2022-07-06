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
      <h1 className="cardblog-text">{props.heading}</h1>
      <span className="cardblog-text1">{props.text}</span>
      <button className="cardblog-button button">{props.button}</button>
    </div>
  )
}

Cardblog.defaultProps = {
  button: 'Leer más',
  heading:
    '5 maneras en que un sistema de alerta temprana para sismos ayudar a tus empleados minimizar riesgos durante un sismo',
  rootClassName: '',
  image_src: '/playground_assets/blog_04-1500w.jpg',
  text: 'Puede que recibas una alerta temprana de sismos incluso estando en tu trabajo. ¿Sabrías cómo proceder con tu personal?',
  image_alt: 'image',
}

Cardblog.propTypes = {
  button: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Cardblog
