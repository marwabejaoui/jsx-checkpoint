import './App.css'; 
import React from 'react';
import imageInSrc from './imageInSrc.png';
import myVideo from './myVideo.mp4';
import "./style.css";

function App() {
  return (
    <div className="App">    
      <div style={{ border: 'solid 1px black' ,width :'100vw'}}>

 <h1 className='title red'>Marwa Bejaoui</h1>

 <br/>
 <img src={imageInSrc} alt="imageInSrc"/>
 <br/>
        <img src='/imageInPublic.png' alt="imageInPublic"/>
      </div>
      
<video width="320" height="240" controls  src={myVideo} type="video/mp4">
</video>
    </div>
  );
}
export default App;
