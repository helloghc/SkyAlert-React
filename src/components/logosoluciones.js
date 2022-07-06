import React from 'react'

import PropTypes from 'prop-types'

import Solucionescard1 from './solucionescard1'
import './logosoluciones.css'

const Logosoluciones = (props) => {
  return (
    <div className={`logo soluciones-container ${props.rootClassName} `}>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_061-200h.png"
        rootClassName="solucionescard1-root-class-name"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_081-200h.png"
        rootClassName="solucionescard1-root-class-name4"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_121-200h.png"
        rootClassName="solucionescard1-root-class-name3"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_041-200h.png"
        rootClassName="solucionescard1-root-class-name2"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_101-200h.png"
        rootClassName="solucionescard1-root-class-name1"
        className=""
      ></Solucionescard1>
      <Solucionescard1
        image_src="/playground_assets/suite-de-soluciones_141-200h.png"
        rootClassName="solucionescard1-root-class-name5"
        className=""
      ></Solucionescard1>
    </div>
  )
}

Logosoluciones.defaultProps = {
  rootClassName: '',
}

Logosoluciones.propTypes = {
  rootClassName: PropTypes.string,
}

export default Logosoluciones
