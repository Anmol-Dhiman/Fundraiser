import React from 'react'
import styles from './CampaignSection.module.css'
import Card from '../../UI/Card'
import ListItem from '../../UI/ListItem'


const CampaignSection = (props) => {
  return (
    <div className={styles['campaign-container']}>
      <h1 className={styles['h1']}>Top Campaigns</h1>
        <ListItem />
        
    </div>
  )
}

export default CampaignSection
