import React from 'react'

import PropTypes from 'prop-types'

import FeatureCardContexto from './feature-card-contexto'
import './bloques.css'

const Bloques1 = (props) => {
  return (
    <div className={`2bloques-container ${props.rootClassName} `}>
      <div className="2bloques-container1"></div>
      <FeatureCardContexto
        text="Al referirnos a intensidad, hablamos de qué tan fuerte es el movimiento que se genera en la superficie. Involucra factores como: tipo de suelo, distancia al epicentro, \n profundidad y magnitud"
        heading="Intensidad"
        image_src="/playground_assets/icons8-3d-touch-50-200h.png"
        rootClassName="feature-card-contexto-root-class-name1"
        className=""
      ></FeatureCardContexto>
      <FeatureCardContexto
        text="Al referirnos a magnitud  hacemos  referencia a la medición de la energía que es liberada por el sismo"
        heading="Magnitud"
        image_src="/playground_assets/icons8-depth-50-200h.png"
        rootClassName="feature-card-contexto-root-class-name"
        className=""
      ></FeatureCardContexto>
    </div>
  )
}

Bloques1.defaultProps = {
  rootClassName: '',
}

Bloques1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Bloques1
