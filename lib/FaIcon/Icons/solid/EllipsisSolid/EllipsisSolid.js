import React from 'react'
import PropTypes from 'prop-types'

const EllipsisSolid = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path fill='currentColor' d='M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z' />
    </svg>
  )
}

EllipsisSolid.propTypes = {
  className: PropTypes.string
}

export default EllipsisSolid
