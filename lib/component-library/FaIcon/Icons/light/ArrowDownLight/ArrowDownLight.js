import React from 'react'
import PropTypes from 'prop-types'

const ArrowLeftLight = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path fill='currentColor' d='M378.8 309.8l-176 165.9C199.7 478.6 195.9 480 192 480s-7.719-1.426-10.77-4.31l-176-165.9C-1.297 303.6-1.781 293.1 4.156 286.3c5.953-6.838 16.09-7.259 22.61-1.134L176 425.9V48.59c0-9.171 7.156-16.59 15.1-16.59S208 39.42 208 48.59v377.3l149.2-140.7c6.516-6.125 16.66-5.704 22.61 1.134C385.8 293.1 385.3 303.6 378.8 309.8z' />
    </svg>
  )
}

ArrowLeftLight.propTypes = {
  className: PropTypes.string
}

export default ArrowLeftLight
