import React from "react"
import { TempleListProps } from "./types"
import styles from '@/styles/TempleList.module.css'
const TempleList: React.FC<TempleListProps> = ({filteredTemples}) => {
  return (
    <>
       {filteredTemples.length > 0 && (
        <div className={styles.templeTable}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Pincode</th>
                <th>Direction</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemples.map((temple) => (
                <tr key={temple.name}>
                  <td>{temple.name}</td>
                  <td>{temple.location}</td>
                  <td>{temple.pincode}</td>
                  <td>
                    <a href={temple.direction} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default TempleList