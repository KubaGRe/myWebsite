import React from 'react';
import photo from './../mug-pc.jpg';
import Typed from 'react-typed';


export const Header = () => {
  return (
    <div id='header-wraper' className='header-wraper' style={{backgroundImage:`url(${photo})`}} >
        <div className='main'>
            <div className='main-info'>
              <Typed strings={["Hello, my name is Jakub Grela, welcome on my page"]} typeSpeed={60}/>
            </div>
        </div>
    </div>
  )
}

export default Header;
