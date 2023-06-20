import React from 'react'
import PropTypes from 'prop-types'

const FilterLight = ({ className }) => {
  return (
    <svg className={`fontAwesome ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' aria-hidden focusable='false'>
      <path fill='currentColor' d='M0 71.53C0 49.7 17.7 32 39.53 32H472.5C494.3 32 512 49.7 512 71.53C512 80.73 508.8 89.64 502.9 96.73L320 317.8V446.1C320 464.8 304.8 480 286.1 480C278.6 480 271.3 477.5 265.3 472.9L204.4 425.4C196.6 419.4 192 410.1 192 400.2V317.8L9.076 96.73C3.21 89.64 0 80.73 0 71.53V71.53zM39.53 64C35.37 64 32 67.37 32 71.53C32 73.28 32.61 74.98 33.73 76.33L220.3 301.8C222.7 304.7 224 308.3 224 312V400.2L284.1 447.6C285.3 447.9 285.7 448 286.1 448C287.2 448 288 447.2 288 446.1V312C288 308.3 289.3 304.7 291.7 301.8L478.3 76.33C479.4 74.98 480 73.28 480 71.53C480 67.37 476.6 64 472.5 64H39.53z' />
    </svg>
  )
}

FilterLight.propTypes = {
  className: PropTypes.string
}

export default FilterLight