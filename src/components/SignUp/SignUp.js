import React from "react";
import styles from "./SignUp.module.css";
import profileImg from "./Profile-image";



const SignUp = (props) => {
  // here we have to add the campaing schema into the user schema

  return (
    <form className={styles.form}>
      <label htmlFor="profile-img" className={styles["profile-img"]}></label>
      <input
        id="profile-img"
        hidden
        type="file"
        placeholder="profile pcture"
      ></input>

      {/* <profileImg className={styles['profile-img']} /> */}
      <button className={styles["set-profile"]} type="button">
        Set profile photo
      </button>
      <input
        id="f-name-id"
        required
        type="text"
        placeholder="First name*"
      ></input>
      <input
        id="l-name-id"
        required
        type="text"
        placeholder="Last name*"
      ></input>
      <input id="email-id" required type="email" placeholder="Email"></input>
      <input
        id="pass-id"
        required
        type="password"
        placeholder="Password*"
      ></input>
      <input
        id="c-pass-id"
        required
        type="password"
        placeholder="Confirm Password*"
      ></input>
      <input id="linkedin-id" type="text" placeholder="Linkedin"></input>
      <input id="instagram-id" type="text" placeholder="Instagram"></input>
      <input
        id="phone-id"
        type="number"
        maxLength={10}
        minlength={10}
        placeholder="Mobile number"
      ></input>
      <textarea id="bio-id" type="text" placeholder="Bio"></textarea>

      <button id="submit-btn-id" type="submit">
        {" "}
        SignUp
      </button>
      <h5>
        Already have an account.
        <span
          onClick={() => {
            props.onFormChange("login");
          }}
          className={styles["span-login"]}
        >
          {" "}
          Log In
        </span>
      </h5>
    </form>
  );
};

export default SignUp;
