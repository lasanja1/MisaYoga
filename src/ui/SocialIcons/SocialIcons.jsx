import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"
import styles from "./SocialIcons.module.css"

const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />

export default function SocialIcons({text}) {
  return (
    <div className={styles.iconsContainer}>
      <a
        className={styles.icons}
        href="https://www.facebook.com/misa.mladenovic.3"
      >
        {facebookIcon}
      </a>
      <a
        className={styles.icons}
        href="https://www.instagram.com/misayoga/?hl=en"
      >
        {instagramIcon}
      </a>
      <a className={styles.icons} href="https://twitter.com/MisaYoga">
        {twitterIcon}
      </a>
    </div>
  )
}
