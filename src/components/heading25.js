import React from 'react'

import PropTypes from 'prop-types'

import './heading25.css'

const Heading25 = (props) => {
  return (
    <div className={`heading 2.5-container ${props.rootClassName} `}>
      <div className="heading 2.5-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="heading 2.5-image"
        />
        <div className="heading 2.5-container2">
          <h2 className="heading 2.5-text heading2">
            <span className="">{props.text}</span>
            <span className="heading 2.5-text2">{props.text1}</span>
          </h2>
          <span className="heading 2.5-text3">{props.text2}</span>
        </div>
      </div>
    </div>
  )
}

Heading25.defaultProps = {
  image_alt: 'image',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
  text: 'Empresas que también confían en ',
  rootClassName: '',
  text1: '&#8203;',
  text2: 'Generamos confianza por la calidad de nuestros servicios.',
}

Heading25.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default Heading25
