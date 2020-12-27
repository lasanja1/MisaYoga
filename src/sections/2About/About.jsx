import React from "react"
import TitleH2 from "./../../ui/TitleH2/TitleH2"
import styles from "./About.module.css"
import Misatree from "./../../assets/images/misatree.jpg"
import Misacertificate from "./../../assets/images/misacertificate.jpg"
import Misamaster from "./../../assets/images/misavodopad.jpg"

export default function About({text}) {
  return (
    <section id="aboutSection" className={styles.container}>
      <TitleH2 title={text.titleH2} />
      <div className={styles.flexContainer}>
        <div className={styles.flexChildren}>
          <img className={styles.imgVertical} src={Misatree} alt="" />
        </div>
        <div className={styles.flexChildren}>
          <p className={styles.paragraph}>{text.p1}</p>
        </div>
      </div>
      <div>
        <img className={styles.imgHorizontal} src={Misamaster} alt="" />
      </div>
      <div className={styles.flexMarginMinus}>
        <div className={styles.flexChildren}>
          <p className={styles.paragraph}>{text.p2}</p>
        </div>
        <div className={styles.flexChildren}>
          <img className={styles.imgVertical} src={Misacertificate} alt="" />
        </div>
      </div>
    </section>
  )
}
