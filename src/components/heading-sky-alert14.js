import React from 'react'

import PropTypes from 'prop-types'

import './heading-sky-alert14.css'

const HeadingSkyAlert14 = (props) => {
  return (
    <div className={`heading sky-alert 1.4-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="heading sky-alert 1.4-image"
      />
      <h1 className="heading sky-alert 1.4-text">{props.heading}</h1>
      <div className="heading sky-alert 1.4-container1">
        <div className="heading sky-alert 1.4-container2">
          <span className="heading sky-alert 1.4-text01">{props.text}</span>
          <span className="heading sky-alert 1.4-text02">{props.text1}</span>
        </div>
        <span className="heading sky-alert 1.4-text03">{props.text2}</span>
      </div>
      <div className="heading sky-alert 1.4-container3">
        <div className="heading sky-alert 1.4-card">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="heading sky-alert 1.4-image1"
          />
          <h4 className="heading sky-alert 1.4-text04 heading4">
            {props.heading11}
          </h4>
          <span className="heading sky-alert 1.4-text05 content-Light">
            {props.text31}
          </span>
        </div>
        <div className="heading sky-alert 1.4-card1">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="heading sky-alert 1.4-image2"
          />
          <h4 className="heading sky-alert 1.4-text06 heading4">
            {props.heading111}
          </h4>
          <span className="heading sky-alert 1.4-text07 content-Light">
            {props.text311}
          </span>
        </div>
      </div>
      <div className="heading sky-alert 1.4-container4">
        <div className="heading sky-alert 1.4-card2">
          <img
            alt={props.image_alt3}
            src={props.image_src3}
            className="heading sky-alert 1.4-image3"
          />
          <h4 className="heading sky-alert 1.4-text08 heading4">
            {props.heading112}
          </h4>
          <span className="heading sky-alert 1.4-text09 content-Light">
            {props.text312}
          </span>
        </div>
        <div className="heading sky-alert 1.4-card3">
          <img
            alt={props.image_alt4}
            src={props.image_src4}
            className="heading sky-alert 1.4-image4"
          />
          <h4 className="heading sky-alert 1.4-text10 heading4">
            {props.heading1111}
          </h4>
          <span className="heading sky-alert 1.4-text11 content-Light">
            {props.text3111}
          </span>
        </div>
      </div>
    </div>
  )
}

HeadingSkyAlert14.defaultProps = {
  rootClassName: '',
  text2: 'con la intensidad local esperada.',
  heading112: 'Débil',
  image_alt2: 'image',
  rootClassName111: '',
  image_src2: '/playground_assets/redskyalert_07-300h.png',
  image_alt: 'image',
  image_src: '/playground_assets/redskyalert_10-1000h.png',
  text: 'Se escucha un tono corto y una voz de',
  image_src3: '/playground_assets/redskyalert_21-300h.png',
  image_src4: '/playground_assets/redskyalert_24-300h.png',
  text3111: 'Llegan a sentirse, pero no suelen  ser destructivos.',
  image_src1: '/playground_assets/redskyalert_16-300h.png',
  text1: '“SISMO DETECTADO”',
  rootClassName112: '',
  text31:
    'Solo se mueven objetos colgantes. No suelen causar daños a estructuras.',
  text312:
    'Solo se mueven objetos colgantes. No suelen causar daños a estructuras.',
  image_alt4: 'image',
  heading1111: 'Leve',
  heading11: 'Débil',
  image_alt1: 'image',
  rootClassName11: '',
  text311: 'Llegan a sentirse, pero no suelen  ser destructivos.',
  image_alt3: 'image',
  heading111: 'Leve',
  heading: 'Sismo Detectado',
  rootClassName1111: '',
}

HeadingSkyAlert14.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  heading112: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName111: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_src3: PropTypes.string,
  image_src4: PropTypes.string,
  text3111: PropTypes.string,
  image_src1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName112: PropTypes.string,
  text31: PropTypes.string,
  text312: PropTypes.string,
  image_alt4: PropTypes.string,
  heading1111: PropTypes.string,
  heading11: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName11: PropTypes.string,
  text311: PropTypes.string,
  image_alt3: PropTypes.string,
  heading111: PropTypes.string,
  heading: PropTypes.string,
  rootClassName1111: PropTypes.string,
}

export default HeadingSkyAlert14
