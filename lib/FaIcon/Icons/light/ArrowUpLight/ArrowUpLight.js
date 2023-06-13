import React from 'react'
import PropTypes from 'prop-types'

const ArrowUpLight = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path fill='currentColor' d='M379.8 225.7C376.7 229.3 372.3 231.1 368 231.1c-3.844 0-7.703-1.426-10.77-4.31L208 86.12v377.3c0 9.171-7.156 16.59-15.1 16.59S176 472.6 176 463.4V86.12l-149.2 140.7C20.25 232.1 10.14 232.5 4.156 225.7C-1.781 218.9-1.297 208.4 5.234 202.2l176-165.9c6.094-5.768 15.44-5.768 21.53 0l176 165.9C385.3 208.4 385.8 218.9 379.8 225.7z' />
    </svg>
  )
}

ArrowUpLight.propTypes = {
  className: PropTypes.string
}

export default ArrowUpLight