import React from 'react'

import PropTypes from 'prop-types'

import './heading21s-e-p-a-r-a-d-o-s-s-u-b-t1.css'

const Heading21SEPARADOSSUBT1 = (props) => {
  return (
    <div className={`heading_b1 ${props.rootClassName} `}>
      <div className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-container1">
        <img alt={props.image_alt} src={props.image_src} className="icon_b1" />
        <div className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-container2 heading2 text_b1">
          <h2 className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-text">
            <span className="">{props.text}</span>
            <span className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-text2">
              {props.text1}
            </span>
          </h2>
          <span className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-text3">
            {props.text2}
          </span>
          <span className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-text4">
            {props.text21}
          </span>
          <span className="heading 2.1 s-e-p-a-r-a d-o-s s-u-b-t1-text5">
            {props.text211}
          </span>
        </div>
      </div>
    </div>
  )
}

Heading21SEPARADOSSUBT1.defaultProps = {
  rootClassName: '',
  text211: 'Text',
  text1: '&#8203;',
  text21: 'Text',
  text: 'Empresas que también confían en ',
  text2: 'Text',
  image_alt: 'image',
  image_src: '0b4257d7-b312-40cd-b9bd-5514c55da713',
}

Heading21SEPARADOSSUBT1.propTypes = {
  rootClassName: PropTypes.string,
  text211: PropTypes.string,
  text1: PropTypes.string,
  text21: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Heading21SEPARADOSSUBT1
