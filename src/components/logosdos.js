import React from 'react'

import PropTypes from 'prop-types'

import './logosdos.css'

const Logosdos = (props) => {
  return <div className={`logos dos-container ${props.rootClassName} `}></div>
}

Logosdos.defaultProps = {
  rootClassName: '',
}

Logosdos.propTypes = {
  rootClassName: PropTypes.string,
}

export default Logosdos
