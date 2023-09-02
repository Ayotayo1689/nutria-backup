import React, {FC} from 'react'
import google from '../../../assets/svg/goggle.svg';
import apple from '../../../assets/svg/apple.svg';
import facebook from '../../../assets/svg/facebook.svg';
import  './Social.styles.scss';

const Socials: FC = () => {
    return (
      <div className='socials'>
        <div className="socials__image  google">
        <a href="/">
          <img src={google} alt='google' /></a>
          </div>
          <div className="socials__image  apple" >
          <a href="/">
            <img src={apple} alt="apple" />
          </a>
          </div>
          <div className="socials__image facebook">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          </div>
      </div>
    )
  }
  
  export default Socials
