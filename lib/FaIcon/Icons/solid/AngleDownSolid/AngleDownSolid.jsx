import React from 'react'
import PropTypes from 'prop-types'

const AngleDownSolid = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' aria-hidden focusable='false'>
      <path fill='currentColor' d='M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z' />
    </svg>
  )
}

AngleDownSolid.propTypes = {
  className: PropTypes.string
}

export default AngleDownSolid
