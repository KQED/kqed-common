import React from 'react'
import PropTypes from 'prop-types'
import FaIcon from 'lib/FaIcon/FaIcon'
import styles from './ButtonLink.scss'

const ButtonLink = ({ className = '', text, url, ariaLabelText }) => {

  return (
    <a 
      className={`
        ${className}
        ${styles[className]}
        test
      `}
      href={url}
      aria-label={`${ariaLabelText}`}
    >
      {text}
      <FaIcon icon={'arrowRightLight'} className={styles.buttonLinkIcon} />
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
