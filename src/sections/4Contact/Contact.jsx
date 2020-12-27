import React from "react"
import TitleH2 from "./../../ui/TitleH2/TitleH2"
import SocialIcons from "./../../ui/SocialIcons/SocialIcons"
import Videos from "./../../ui/Videos/Videos"
import styles from "./Contact.module.css"

export default function Contact({text}) {
  return (
    <section id="contactSection" className={styles.container}>
      <TitleH2 title={text.titleH2} />
      <SocialIcons />
      <Videos />
    </section>
  )
}
