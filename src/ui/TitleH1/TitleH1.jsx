import React from "react"
import styles from "./TitleH1.module.css"

export default function TitleH1({title}) {
  return <h1 className={styles.title}>{title}</h1>
}
