import React from 'react'

import PropTypes from 'prop-types'

import Titulosdoscolores1 from './titulosdoscolores1'
import './servidoracliente.css'

const Servidoracliente = (props) => {
  return (
    <div className={`servidor a cliente-container ${props.rootClassName} `}>
      <div className="servidor a cliente-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="servidor a cliente-image"
        />
        <Titulosdoscolores1
          rootClassName="titulosdoscolores1-root-class-name"
          className=""
        ></Titulosdoscolores1>
      </div>
    </div>
  )
}

Servidoracliente.defaultProps = {
  rootClassName: '',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
  image_alt: 'image',
}

Servidoracliente.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Servidoracliente
