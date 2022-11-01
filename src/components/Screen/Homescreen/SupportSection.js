import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SupportSection.module.css'

const SupportSection = () => {

    const navigate = useNavigate();

    const campaignPage = () =>{
        navigate("/campaign")
    }

  return (
    <div className={styles['sup-sec']}>
      <h1 className={styles['sup-info']}>Need support or funding ?</h1>
      <button onClick={campaignPage} className={styles['sup-info-btn']}>Start Campaign</button>
    </div>
  )
}

export default SupportSection
