import './App.css'
import { useState } from 'react';
import  { Navbar}  from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax';
import Carousels from './components/parallax/Carousels'

function App() {
  const [brightness, setBrightness] = useState(100);

  const updateBrightness  = (newBrightness: number) => {
    setBrightness(newBrightness);
  };
  
  return (
    <>
      <Navbar updateBrightness = {updateBrightness} />
      <div className={`app-container ${brightness < 100 ? 'dimmed' : ''}`}>
        <Parallax/>
        <Carousels/>
      </div>
    </>
  )
}

export default App
