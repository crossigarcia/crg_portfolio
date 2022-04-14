import React from 'react';
import './roundImage.scss';
import Portrait from "../../assets/cecilia.jpg";

const RoundImage = () => {
   return (
      <div className='img-container'>
         <div className='img-div'>
            <img className="img" src={Portrait} alt="Cecilia Rossi-Garcia in black and white"></img>
         </div>
         <div className='rotating-design'></div>
      </div>
   )
}

export default RoundImage;