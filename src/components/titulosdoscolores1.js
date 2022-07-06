import React from 'react'

import PropTypes from 'prop-types'

import './titulosdoscolores1.css'

const Titulosdoscolores1 = (props) => {
  return (
    <div className={`titulos dos colores1-container ${props.rootClassName} `}>
      <h2 className="titulos dos colores1-text heading2">
        <span className="">{props.text}</span>
        <span className="titulos dos colores1-text2">{props.text1}</span>
      </h2>
    </div>
  )
}

Titulosdoscolores1.defaultProps = {
  rootClassName: '',
  text1: 'Servidor a Cliente',
  text: 'Integración ',
}

Titulosdoscolores1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Titulosdoscolores1
