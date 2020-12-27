import React, {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import styles from "./Navigation.module.css"

const menuIcon = <FontAwesomeIcon icon={faBars} />

export default function Navigation({open, text}) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className={styles.header}>
      {/*{menuOpen ? null : (
        <ul className={styles.languagesContainer}>
          <li>EN</li>
          <li>DE</li>
          <li>SR</li>
        </ul>
      )}*/}
      <div onClick={toggleMenu} className={styles.menuIcon} open={open}>
        {menuIcon}
      </div>
      {menuOpen ? (
        <nav className={styles.nav}>
          <ul className={styles.navUl}>
            <li>
              <a href="#aboutSection">About</a>
            </li>
            <li>
              <a href="#scheduleSection">Schedule</a>
            </li>
            <li>
              <a href="#contactSection">Contact</a>
            </li>
            <li onClick={toggleMenu} className={styles.close}>
              &#10005;
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
