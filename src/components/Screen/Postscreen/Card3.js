import React from 'react'
import './Card3.css';

const Card3 = () => {
  return (
    <div className='body1'>
      <div className='upper'>
      <div id="abc">
        <input type="file" id="selectFile" />
      </div>
      </div>
      <form className='form1'>
        <input className='input-field' type="text" placeholder='Name' />
        <input className='input-field' type="email" placeholder='Email' />
        <input className='input-field' type="url" placeholder='LinkedIn url' />
        <input className='input-field' type="url" placeholder='instagram url' />
        <input className='input-field' type="number" placeholder='phone number' />
        <input className='input-field' type="url" placeholder='Github url' />
        <input className='input-field' type="text" placeholder='bio' />
        <div className='button1'>
          <button className='button' type="submit">Save</button>
          <button className='button' type="submit">Discard</button>
        </div>
      </form>

    </div>
  )
}

export default Card3