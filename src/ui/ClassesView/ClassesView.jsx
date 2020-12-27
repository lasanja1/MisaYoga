import React, {useState} from "react"
import styles from "./ClassesView.module.css"

export default function ClassesView({classes}) {
  const [selectedClass, setSelectedClass] = useState(classes.locations[0])

  const handleClassSelection = (userPick) => () => {
    setSelectedClass(userPick)
  }

  return (
    <div className={styles.container}>
      <div className={styles.selection}>
        {classes.locations.map((s, i) => {
          return (
            <div key={s.id} onClick={handleClassSelection(s)}>
              {s.location}
            </div>
          )
        })}
      </div>
      <div className={styles.dualContainer}>
        <div>
          <h3 className={styles.titleH3}>{selectedClass.location}</h3>
          <p>{selectedClass.address}</p>
          <br />
          <br />
          {selectedClass.days.map((d, i) =>
            d[Object.keys(d)] !== "" ? (
              <p>
                {Object.keys(d)}: {d[Object.keys(d)]}
              </p>
            ) : null
          )}
        </div>
        <div>{selectedClass.map !== "" ? selectedClass.map : ""}</div>
      </div>
    </div>
  )
}
