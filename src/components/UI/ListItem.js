import React from "react";
import styles from "./Card.module.css";
import Card from "./Card";
import CampaignImg from "../Images/undraw_add_friends_re_3xte 1.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: " Title1",
    desc: "description dolor sit amet, labore et dolore magna aliqua. Ut enim ad minim veniam, quis consectetur adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
  {
    title: " Title2",
    desc: "description dolor sit amet, labore et dolore magna aliqua. Ut enim ad minim veniam, quis consectetur adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
  {
    title: " Title3",
    desc: "description dolor sit amet, labore et dolore magna aliqua. Ut enim ad minim veniam, quis consectetur adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
  {
    title: " Title4",
    desc: "description dolor sit amet, consectetlabore et dolore magna aliqua. Ut enim ad minim veniam, quis  ur adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
  {
    title: " Title5",
    desc: "description dolor sit amet, consectetur labore et dolore magna aliqua. Ut enim ad minim veniam, quis  adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
  {
    title: " Title6",
    desc: "description dolor sit amet, labore et dolore magna aliqua. Ut enim ad minim veniam, quis  consectetur adipiscing elit, sed do",
    date: "20th Dec 2022",
    amount: "$7000",
  },
];

const ListItem = (props) => {
  const navigate = useNavigate();
  const readMore = () => {
    navigate("/profile");
  };

  return (
    <Card>
      <ul className={styles["p-div"]}>
        {data.map((info) => (
          <li className={styles["li-item"]}>
            <div className={styles.card}>
              <img
                className={styles["card-img"]}
                src={CampaignImg}
                alt="campaign-image"
              ></img>
              <div className={styles.cardInfo}>
                <h2>{info.title}</h2>
                <p className={styles["p-font"]}>{info.desc}</p>
                <p>
                  {" "}
                  Live till
                  <span className={styles["live-date"]}> 20th Dec 2022</span>
                </p>
                <div>
                  <span className={styles["goal-amt"]}>
                    <b>5000</b>
                  </span>
                  <span className={styles["goal-amt"]}>
                    <b>1000</b>
                  </span>
                  <span className={styles["goal-amt"]}>
                    <b>15000</b>
                  </span>
                </div>
                <h4 className={styles['donate-amt']}>
                  {info.amount} raised out of $30,000
                  <span>
                    <button
                      onClick={readMore}
                      className={styles["readmore-btn"]}
                    >
                      Read More
                    </button>
                  </span>
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListItem;
