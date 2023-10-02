import logo from './logo.svg';
import './App.css';
import system from './imageadd/img1.webp';
import systems from './imageadd/img2.png';
import systemes from './imageadd/img3.jpg';
import laptop from './imageadd/img1.webp';
import laptop1 from './imageadd/img2.png';
import laptop2 from './imageadd/img1.webp';
function App() {
  return (
    <div className="App">
     <img src={system} height={300} weight={300}/>
     <img src={systems} height={300} weight={300} />
     <img src={systemes} height={300} weight={300} />
     <img src={laptop} height={300} weight={300}/>
     <img src={laptop1} height={300} weight={300}/>
     <img src={laptop2} height={300} weight={300}/>

     
         </div>
  );
}

export default App;
