import React from 'react'

import PropTypes from 'prop-types'

import './heading31.css'

const Heading31 = (props) => {
  return (
    <div className={`heading 3.1-container ${props.rootClassName} `}>
      <h2 className="heading 3.1-text heading2">
        <span className="heading 3.1-text01">
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading 3.1-text02">
          Tus suscripciones
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading 3.1-text03">
          hicieron posible que Chiapas, Veracruz, Morelos y Estado de México,
          tuvieran por primera vez un
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="heading 3.1-text04">
          sistema de alertamiento sísmico
        </span>
        <span className="heading 3.1-text05">.</span>
        <br className=""></br>
        <span className=""></span>
        <br className=""></br>
        <span className="">Con tu apoyo, la cobertura seguirá creciendo.</span>
      </h2>
      <div className="heading 3.1-container1">
        <span className="heading 3.1-text10">{props.text}</span>
        <span className="heading 3.1-text11">{props.text1}</span>
      </div>
    </div>
  )
}

Heading31.defaultProps = {
  text1: 'SkyAlert',
  text: 'Plataformas de descarga  en donde puedes encontrar',
  rootClassName: '',
}

Heading31.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Heading31
