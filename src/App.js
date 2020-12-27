import React, {useState} from "react"
import "./reset.css"
import "./styles.css"
import Copy from "./assets/copy/Translations.js"
import Hero from "./sections/1Hero/Hero"
import About from "./sections/2About/About"
import Schedule from "./sections/3Schedule/Schedule"
import Contact from "./sections/4Contact/Contact"
import Footer from "./sections/5Footer/Footer"

export default function App() {
  const [translations, setTranslations] = useState(Copy.en)

  /*const changeToGerman = () => {
    setTranslations(Copy.de)
  }
  const changeToEnglish = () => {
    setTranslations(Copy.en)
  }
  const changeToSerbian = () => {
    setTranslations(Copy.sr)
  }*/

  return (
    <div className="App">
      <Hero text={translations} />
      <About text={translations.about} />
      <Schedule text={translations.schedule} />
      <Contact text={translations.contact} />
      <Footer />
    </div>
  )
}
