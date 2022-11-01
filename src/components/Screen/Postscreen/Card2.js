// import logo from './logo.svg';
import styles from './Card.css';
import instagram from '../../Images/instagram.png'
import email from '../../Images/email.png'
import linkedin from '../../Images/linkedin.png'
import playstore from '../../Images/playstore.png'
import github from '../../Images/github.png'
 import edit from '../../Images/edit.png'


function Card() {
  return (
    <div className="body">
      <div className="upperHeader">
      <img src={edit} className={styles['edit-icon-img']} alt='edit-icon'></img>
      </div>
      <div className="outerCircle">
      
      </div >
      <div className='content'>
        <h2 className={styles['hovercard-heading']}>Title </h2>
        <p className={styles['p']}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        </p>
      </div>

      <div className='icon'>
        <a href=""><img className={styles['icon-img']} src={instagram}  alt="" /></a>
        <a href=""><img className={styles['icon-img']} src={email} alt="" /></a>
        <a href=""><img className={styles['icon-img']} src={linkedin} alt="" /></a>
        <a href=""><img className={styles['icon-img']} src={playstore} alt="" /></a>
        <a href=""><img className={styles['icon-img']} src={github} alt="" /></a>
      </div>

    </div>
  );
}

export default Card;
