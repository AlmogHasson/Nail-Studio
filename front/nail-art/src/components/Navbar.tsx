import { useState } from "react";

interface NavbarProps {
  updateBrightness: (newBrightness: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ updateBrightness }) => { 
  const [toggle, setToggle] = useState('nav-close')


  const handleButtonClick = () => {
    toggle==='nav-close'
    ?
    (setToggle('nav-open'), updateBrightness(50))
    :
    (setToggle('nav-close'), updateBrightness(100))

  } 
  
  
  return (
    <div className="nav-container">
      <div className= {toggle} >

        <nav>
            <ul>
              <li><a href='#signin'>sign in</a></li>
              <li><a href='#signup'>sign up</a></li>
              <li><a href='#reserve'>reserve</a></li>
            </ul>
        </nav>
        <button onClick={()=> handleButtonClick()}>
          <svg className="svg-icon hamburger"  viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
          <svg className="svg-icon close-icon" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>

  );
};
