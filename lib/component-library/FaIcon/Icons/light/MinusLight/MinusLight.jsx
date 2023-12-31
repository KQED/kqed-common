import React from 'react'
import PropTypes from 'prop-types'

const MinusLight = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' aria-hidden>
      <path fill='currentColor' d='M432 256C432 264.8 424.8 272 416 272H32c-8.844 0-16-7.15-16-15.99C16 247.2 23.16 240 32 240h384C424.8 240 432 247.2 432 256z' />
    </svg>
  )
}

MinusLight.propTypes = {
  className: PropTypes.string
}

export default MinusLight
