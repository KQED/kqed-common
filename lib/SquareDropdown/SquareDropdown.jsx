import React, { useState, useEffect, useCallback, useRef } from 'react'
import FaIcon from 'lib/FaIcon'
import styles from './SquareDropdown.scss'

const SquareDropdown = ({ title = '', list = [], label = '' }) => {
  const [active, setActive] = useState(false)
  const [listRefs, setListRefs] = useState([])
  const [listIdx, setListIdx] = useState(-1)
  const dropdownBtn = useRef(null)
  const dropdownMenu = useRef(null)
  const randId = Math.floor(Math.random() * 100)

  const handleDropdownBlur = (event) => {
    const currentTarget = event.currentTarget
    if (event.type === 'blur') {
      requestAnimationFrame(() => {
        if (
          !currentTarget.contains(document.activeElement) &&
          active
        ) {
          setActive(false)
        }
      })
    }
  }

  // Handle the escape key close
  const handleDropdownEsc = (event) => {
    if (event) {
      if (
        event.type === 'keyup' &&
        event.key === 'Escape' &&
        active
      ) {
        setActive(false)
      }
    }
  }

  const handleDropdownOpen = () => {
    setActive(true)
  }

  const handleDropdownClose = () => {
    setListIdx(-1)
    setListRefs([])
    setActive(false)
    dropdownBtn.current.focus()
  }

  // Handles logic for keydown
  const handleKeyDown = useCallback (
    event => {
      if (!active) return
      if (
        (event.shiftKey && event.keyCode === 9) || // Shift+Tab
        (event.key === 'ArrowUp')
      ) {
        event.preventDefault()
        setListIdx(listIdx - 1)
        if (listIdx <= 0) {
          setListIdx(-1)
          handleDropdownClose()
        }
        return
      }

      if (
        (event.keyCode === 9) || // Tab
        (event.key === 'ArrowDown')
      ) {
        event.preventDefault()
        setListIdx(listIdx + 1)
        if (listIdx >= listRefs.length - 1) {
          setListIdx(-1)
          handleDropdownClose()
        }
        return
      }
    },
    [handleDropdownClose, listIdx]
  )

  // Sets focus on li anchor
  useEffect(() => {
    listRefs[listIdx]?.current.childNodes[0].focus()
  }, [listIdx])

  // Listens for keydown on dropdownBtn
  useEffect(() => {
    if (dropdownBtn) {
      dropdownBtn.current?.addEventListener('keydown', handleKeyDown, false)
      return () => {
        dropdownBtn.current?.removeEventListener('keydown', handleKeyDown, false)
      }
    }
  }, [handleKeyDown])

  // Listens for keydown on the ul dropdown
  useEffect(() => {
    if (dropdownMenu) {
      dropdownMenu.current?.addEventListener('keydown', handleKeyDown, false)
      return () => {
        dropdownMenu.current?.removeEventListener('keydown', handleKeyDown, false)
      }
    }
  }, [handleKeyDown])

  const renderBtn = (item) => {
    return (
      <button
        role='menuitem'
        tabIndex={0}
        onClick={item.handler}
      >
        {item.title}
      </button>
    )
  }

  const renderLink = (item) => {
    return (
      <a
        role='menuitem'
        tabIndex={0}
        href={item.link}
      >
        {item.title}
      </a>
    )
  }

  const renderItem = (item, idx, listRef) => {
    return (
      <li
        role='none'
        key={`menu-item-${idx}`}
        ref={listRef}
      >
        {item.link && renderLink(item)}
        {item.handler && renderBtn(item)}
      </li>
    )
  }

  return (
    <div
      className={styles.container}
      onBlur={(e) => handleDropdownBlur(e)}
    >
      <button
        id={`menu-${randId}`}
        className={styles.activateBtn}
        onClick={() => active ? handleDropdownClose() : handleDropdownOpen()}
        aria-label={label}
        aria-expanded={active}
        ref={dropdownBtn}
        onKeyUp={(e) => handleDropdownEsc(e)}
      >
        <span>{title}</span>
        {
          active ?
            <FaIcon icon={'angleUpLight'} /> :
            <FaIcon icon={'angleDownLight'} />
        }
      </button>
      <ul
        className={styles.menu}
        role='menu'
        aria-labelledby={`menu-${randId}`}
        onKeyUp={(e) => handleDropdownEsc(e)}
        ref={dropdownMenu}
        tabIndex='-1'
        style={{ display: `${active ? 'block' : 'none'}` }}
      >
        {
          list.map((item, idx) => {
            const listRef = useRef(null)
            if (listRefs.length < list.length) listRefs.push(listRef)
            return renderItem(item, idx, listRef)
          })
        }
      </ul>
    </div>
  )
}

export default SquareDropdown
