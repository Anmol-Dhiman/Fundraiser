import React, {useState} from 'react'
import Card from './Card2';
import styles from './Details.module.css'

const Details = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };  
  
    return (
      <div>
      {/* {isHovering && <h1>This is hovering div </h1>} */}
        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
           <Card />
          </div>

          
        </div>
      </div>
    );
  };
export default Details
