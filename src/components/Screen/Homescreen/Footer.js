import React from "react";
import logoImg from "../../Images/Vector.png";
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <React.Fragment>
    <div className={styles['footer-container']}>
        <div>
            <img className={styles['footer-img']} src={logoImg} alt='logo-image'></img>
        </div>
      <div className={styles['footer-sub-container']}>
        <h3>Fundraise for</h3>
        <ul className={styles['footer-ul']}>
          <li>Medical</li>
          <li>Emergency</li>
          <li>Memorial</li>
          <li>Education</li>
          <li>Non Profit</li>
          <li>Crisis Relief</li>
        </ul>
      </div>
      <div className={styles['footer-sub-container']}>
      <h3>Learn More</h3>
        <ul className={styles['footer-ul']}>
          <li>How this works</li>
          <li>Why to choose us</li>
          <li>Common Questions</li>
          <li>Success stories</li>
          <li>Charity fundraising</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className={styles['footer-sub-container']}>
      <h3>Resources</h3>
        <ul className={styles['footer-ul']}>
          <li>Help Center</li>
          <li>Blog</li>
          <li>Press Center</li>
          <li>Careers</li>
          <li>About</li>
          <li>More Resources</li>
        </ul>
      </div>
    </div>
    <div className={styles['copyright']}>
      Copyright © 2022 | All rights reserved.
    </div>
    </React.Fragment>
  );
};

export default Footer;
