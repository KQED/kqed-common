import React from 'react'
import PropTypes from 'prop-types'
// need to import FaIcon component for ButtonLink to render the icon. 
// it is commented out so it does not break. 
// import FaIcon from 'components/FaIcon/FaIcon'
import styles from './ButtonLink.scss'

const ButtonLink = ({ className = '', text, url, ariaLabelText }) => {

  return (
    <a 
      className={`
        ${className}
        ${styles[className]}
      `}
      href={url}
      aria-label={`${ariaLabelText}`}
    >
      {text}
      {/* <FaIcon icon={'arrowRightLight'} className={styles.buttonLinkIcon} /> */}
    </a>
  )
}

ButtonLink.propTypes = {
  className: PropTypes.string, 
  text: PropTypes.string, 
  url: PropTypes.string,
  ariaLabelText: PropTypes.string
}

export default ButtonLink
