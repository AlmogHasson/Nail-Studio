import './App.css'
import { useState } from 'react';
import  { Navbar}  from './components/Navbar'

function App() {
  const [brightness, setBrightness] = useState(100);

  const updateBrightness  = (newBrightness: number) => {
    setBrightness(newBrightness);
  };
  
  return (
    <>
      <Navbar updateBrightness = {updateBrightness} />
      <div className={`app-container ${brightness < 100 ? 'dimmed' : ''}`}>
        <div className="App">
          <p>hello</p>
        </div>
      </div>
    </>
  )
}

export default App
