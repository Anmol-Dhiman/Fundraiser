import { useState } from "react";
import Login from "./components/Login/Login";
import Homescreen from "./components/Screen/Homescreen/Homescreen";
import SignUp from "./components/SignUp/SignUp";
import styles from "./components/Screen/Homescreen/Header.module.css";
import logo from "./components/Images/Vector.png";
import Campaign from "./components/Screen/Postscreen/Campaign";
import Profile from "./components/Screen/Postscreen/Profile";
// import {Nav,Navbar, NavDropdown } from 'react-bootstrap';
import Card from './components/Screen/Postscreen/Card2'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currForm, setCurrForm] = useState("login");
  const [isHovering, setIsHovering] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  const toggleForm = (formName) => {
    setCurrForm(formName);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="App">
      {currForm === "login" ? (
        !isLoggedIn && (
          <Login onFormChange={toggleForm} onLogin={loginHandler} />
        )
      ) : (
        <SignUp onFormChange={toggleForm} />
      )}

      {isLoggedIn && (
        <BrowserRouter>
          <header className={styles.header}>
            <ul className={styles["header-items"]}>
              <li>
                <Link to="/">
                  <img
                    className={styles["logo-img"]}
                    src={logo}
                    alt="logo-img"
                  ></img>
                </Link>
              </li>
              <li className={styles['li-start-campaign']}>
                <Link className={styles["nav-item"]} to="/campaign">
                Campaign
                </Link>
              </li>

              {/* <li>
            <Link to="/details">Details</Link>
          </li> */}
              <li
                className={styles["profile-icon"]}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
               <div>
                  
                    <div
                      className={styles['onhover-btn']}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      Profile
                    </div>

                    {isHovering && (<Card />)}
                  
                </div> 
                {/* <Link className={styles['nav-item']} to="/details">Profile</Link> */}
              </li>
              <li>
                <Link
                  to="/login"
                  className={styles["logout-btn"]}
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </header>

          <Routes>
            <Route path="/" element={isLoggedIn ? <Homescreen /> : <Login />} />
            <Route path="/campaign" element={isLoggedIn && <Campaign />} />
            <Route path="/profile" element={isLoggedIn && <Profile />} />
            {/* <Route path="/details" element={isLoggedIn && <Details />} /> */}
          </Routes>
        </BrowserRouter>
      )}
      {/* <Homescreen isAuthenticated={isLoggedIn} /> */}
      {/* {isLoggedIn && <Homescreen onLogout={logoutHandler} />}    */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
