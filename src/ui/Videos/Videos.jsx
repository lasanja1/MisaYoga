import React from "react"
import styles from "./Videos.module.css"
import gif1 from "./../../assets/images/video1.gif"
import gif2 from "./../../assets/images/video1.gif"
import gif3 from "./../../assets/images/video1.gif"
//import Misavideo1 from "./../../assets/videos/video1.mp4"
//import Misavideo2 from "./../../assets/videos/video1.mp4"
//import Misavideo3 from "./../../assets/videos/video1.mp4"

//const videos = [Misavideo1, Misavideo2, Misavideo3]
const gifs = [gif1, gif2, gif3]

const Video = () => {
  return (
    /*<video src={Misagif1}></video>*/
    gifs.map((gif, i) => <img src={gif1} alt="MisaYogaGif" />)
  )
}

export default function Videos() {
  return (
    <div className={styles.videosContainer}>
      <Video />
    </div>
  )
}
