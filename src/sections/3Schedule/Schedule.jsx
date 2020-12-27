import React from "react"
import TitleH2 from "./../../ui/TitleH2/TitleH2"
import ClassesView from "./../../ui/ClassesView/ClassesView"
import styles from "./Schedule.module.css"
import Misaskipper from "./../../assets/images/skipperclass.jpg"

export default function Schedule({text}) {
  return (
    <section id="scheduleSection" className={styles.container}>
      <TitleH2 title={text.titleH2} />
      <div className={styles.imgContainer}>
        <img className={styles.img} src={Misaskipper} alt="" />
      </div>
      <ClassesView classes={text} />
    </section>
  )
}
