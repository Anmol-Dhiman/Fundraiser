import React from "react";
import styles from "./Profile.module.css";
import instagram from "../../Images/instagram.png";
import youtube from "../../Images/youtube.png";
import linkedin from "../../Images/linkedin.png";
import profile from "../../Images/profile.png";
import github from "../../Images/github.png";
import phone from "../../Images/phone.png";
import email from "../../Images/email.png";
const Profile = () => {
  return (
    <div className={styles["profile-page"]}>
      <div className={styles["img-section"]}>Image section</div>
      <div className={styles["profile-section"]}>
        <h1>Flood Affected People</h1>
        <div className={styles["link-icons"]}>
          <img
            className={styles["link-icon"]}
            src={profile}
            alt="instagram"
          ></img>
          <img
            className={styles["link-icon"]}
            src={instagram}
            alt="instagram"
          ></img>
          <img
            className={styles["link-icon"]}
            src={youtube}
            alt="instagram"
          ></img>
          <img
            className={styles["link-icon"]}
            src={linkedin}
            alt="instagram"
          ></img>
          <img
            className={styles["link-icon"]}
            src={github}
            alt="instagram"
          ></img>
          <img
            className={styles["link-icon"]}
            src={phone}
            alt="instagram"
          ></img>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div className={styles["tag-items"]}>
            <h5 className={styles["tag-item"]}>India</h5>
            <h5 className={styles["tag-item"]}>Blockchain</h5>
            <h5 className={styles["tag-item"]}>Startup</h5>
          </div>
          <div className={styles["milestone-cont"]}>
            <div className={styles["milestone-div"]}>
              <p>1st Milestone</p>
              <p>2st Milestone</p>
              <p>3st Milestone</p>
            </div>
            <div className={styles["milestone-div"]}>
              <b>$5000</b>
              <b>$10000</b>
              <b>$15000</b>
            </div>
          </div>
          <div className={styles["profile-heading"]}>
            <h1>$7000 raised of $30,000</h1>
          </div>
          <div className={styles["personal-details"]}>
            <p className={styles["contact-detail"]}>
              <img
                className={styles["link-icon1"]}
                src={phone}
                alt="phone-icon"
              ></img>{" "}
              9772288699
            </p>
            <p className={styles["email-detail"]}>
              <img
                className={styles["link-icon1"]}
                src={email}
                alt="phone-icon"
              ></img>{" "}
              harshshekhawat963@gmail.com
            </p>
            <button className={styles['donate-btn']}>Donate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
