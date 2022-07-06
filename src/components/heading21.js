import React from 'react'

import PropTypes from 'prop-types'

import './heading21.css'

const Heading21 = (props) => {
  return (
    <div className={`heading 2.1-container ${props.rootClassName} `}>
      <div className="heading 2.1-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="heading 2.1-image"
        />
        <div className="heading 2.1-container2">
          <h2 className="heading 2.1-text heading2">
            <span className="">{props.text}</span>
            <span className="heading 2.1-text2">{props.text1}</span>
          </h2>
          <span className="heading 2.1-text3">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Heading21.defaultProps = {
  text1: '&#8203;',
  image_alt: 'image',
  text: 'Empresas que también confían en ',
  rootClassName: '',
  text2: 'Generamos confianza por la calidad de nuestros servicios.',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
}

Heading21.propTypes = {
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
}

export default Heading21
