import React from "react"
import TitleH1 from "./../../ui/TitleH1/TitleH1"
import Navigation from "./../../ui/Navigation/Navigation"
import styles from "./Hero.module.css"
import Misahero from "./../../assets/images/misayogahero.jpg"

export default function Hero({text}) {
  return (
    <section className={styles.container}>
      <Navigation />
      {/*<TitleH1 title={text.hero.titleH1} />*/}
      <img className={styles.heroImg} src={Misahero} alt="hero" />
    </section>
  )
}
