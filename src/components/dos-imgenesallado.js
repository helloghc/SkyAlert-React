import React from 'react'

import PropTypes from 'prop-types'

import './dos-imgenesallado.css'

const DosImgenesallado = (props) => {
  return (
    <div className={`dos imágenes al lado-container ${props.rootClassName} `}>
      <div className="dos imágenes al lado-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="dos imágenes al lado-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="dos imágenes al lado-image1"
        />
      </div>
    </div>
  )
}

DosImgenesallado.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  image_src: '/playground_assets/por-que%CC%81-skyalert_44-200h.png',
  image_src1: '/playground_assets/por-que%CC%81-skyalert_46-200h.png',
  image_alt: 'image',
}

DosImgenesallado.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default DosImgenesallado
