
import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homeDiv'>
      <div className='dividerHome'>
                    <div className='blockHome'><Typography> <h1 className='frontText' >Hi,<br />
                    I'm Bhanu js <br />
                    Full Stack Developer</h1> </Typography>
                    </div> 
                    <div >
                      <NavLink to='/about' className='nodeco'><button className='downloadcv'>Click Here For More</button></NavLink>
                    <br />
               </div>
                       
                  
      </div>
      
       <div className='dividerHome'>
           <div style={{display:"flex", justifyContent:"center"}}>
              <img alt='gif_img' className='imgHome' src='photos/4.gif' />
           </div>
       </div>
    </div>
  )
}

export default Home