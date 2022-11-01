import React from 'react'
import styles from './Campaign.module.css'
const Campaign = () => {
  return (
    <div className={styles['campaign-page']}>
      <h1 className={styles['campaign-heading']}>Raise Funding</h1>
      <p className={styles['img-label']}>Images</p>
      <form className={styles['campaign-form']}>
        <input className={styles['inputfield-req']} required placeholder='Title*'></input>
        <input className={styles['inputfield-req']} required placeholder='Description*'></input>
        <input className={styles['inputfield-req']} required placeholder='Metamask Public Key*'></input>
        <label htmlFor='input-img' className={styles['addImg-label']}></label>
        <input type='file' id='input-img' className={styles['addImg-input']} placeholder='add images'></input>
        <button className={styles['cir-btn1']}>+</button>
        <input className={styles['email-input']} type='email' placeholder='https://www.instagram.com/'></input>
        <button className={styles['cir-btn2']}>+</button>    
        <input className={styles['email-input']} type='email' placeholder='9772288699'></input>
        <button className={styles['cir-btn3']}>+</button>  
        <input  className={styles['tag-container']} ></input>
        <button className={styles['cir-btn4']}>+</button>  

        <button type='submit' className={styles['campaign-btn']}>Submit</button>
      </form>
    </div>
  )
}

export default Campaign
