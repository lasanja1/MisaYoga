import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <section className={styles.footer}>
      <p>Copyright © 2020 - {currentYear} Misa Yoga. All rights reserved.</p>
    </section>
  )
}
