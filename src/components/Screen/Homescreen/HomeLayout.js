import React from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../../Images/undraw_add_friends_re_3xte 1.png";
import styles from "./HomeLayout.module.css";
const HomeLayout = () => {
    
    const navigate = useNavigate();

    const campaignPage = () => {
        navigate("/campaign")
    }

  return (
    <div className={styles["home-section"]}>
      <div className={styles["home-sec-info"]}>
        <h2 className={styles.h2}>Lorem ipsum el latel du</h2>
        <h1>Give support to the needy and support lives.</h1>
        <p>This website is secured </p>
        <p>All the transaction are available in Etherscan</p>
        <div className={styles["home-sec-btn-p"]}>
          <button onClick={campaignPage} className={styles["home-sec-btn-c1"]}>Start Campaign</button>
          <button className={styles["home-sec-btn-c2"]}>Donate Now </button>
        </div>
      </div>

      <img
        className={styles["landing-img"]}
        src={landingImg}
        alt="landing-img"
      ></img>
    </div>
  );
};

export default HomeLayout;
