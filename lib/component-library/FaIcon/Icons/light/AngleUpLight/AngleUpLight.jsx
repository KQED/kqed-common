import React from 'react'
import PropTypes from 'prop-types'

const AngleUpLight = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' aria-hidden focusable='false'>
      <path fill='currentColor' d='M363.9 330.7c-6.271 6.918-16.39 6.783-22.62 1.188L192 197.5l-149.3 134.4c-6.594 5.877-16.69 5.361-22.62-1.188C14.2 324.1 14.73 314 21.29 308.1l159.1-144c6.125-5.469 15.31-5.469 21.44 0l159.1 144C369.3 314 369.8 324.1 363.9 330.7z' />
    </svg>
  )
}

AngleUpLight.propTypes = {
  className: PropTypes.string
}

export default AngleUpLight
