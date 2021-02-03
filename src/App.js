import imageInSrc from './imageInSrc.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
     

      <div style={{border:'1px solid black', maxWidth:'100vw'}}>

      <h1 className="title red">Bilel Marrouchi</h1>
       
      <span className="image">
      <img src={imageInSrc} alt="imageInSrc" />
       <br></br>

      <img src="/imageInPublic.jpg" />
      </span>

      <video width='320' height='240'controls  allow='autoplay' >

       <source src="/react.mp4" type="video/mp4" />

       </video>
      </div>

    </div>
  );
}

export default App;
