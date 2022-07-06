import React from 'react'

import PropTypes from 'prop-types'

import './social.css'

const Social = (props) => {
  return (
    <div className={`social-container ${props.rootClassName} `}>
      <div className="social-container1">
        <img
          alt={props.image_alt3}
          src={props.image_src3}
          className="social-image"
        />
        <div className="social-container2">
          <img
            alt={props.image_alt21}
            src={props.image_src21}
            className="social-image1"
          />
        </div>
        <img
          alt={props.image_alt4}
          src={props.image_src4}
          className="social-image2"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="social-image3"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="social-image4"
        />
      </div>
    </div>
  )
}

Social.defaultProps = {
  image_alt4: 'image',
  image_alt21: 'image',
  image_src4: '/playground_assets/skyalert-%5B2%5D_62-800h.png',
  image_src3: '/playground_assets/skyalert-%5B2%5D_60-800h.png',
  image_src21: '/playground_assets/skyalert-%5B2%5D_67-200w.png',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt1: 'image',
  image_src1: '/playground_assets/skyalert-%5B2%5D_64-800h.png',
  image_alt3: 'image',
  image_alt2: 'image',
  rootClassName: '',
  image_src2: '/playground_assets/skyalert-%5B2%5D_70-800h.png',
}

Social.propTypes = {
  image_alt4: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src4: PropTypes.string,
  image_src3: PropTypes.string,
  image_src21: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src2: PropTypes.string,
}

export default Social
