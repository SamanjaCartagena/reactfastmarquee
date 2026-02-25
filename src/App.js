import logo from './logo.svg';
import Marquee from 'react-fast-marquee';
import './App.css';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';
import six from './images/six.png';
import seven from './images/seven.png';
import eight from './images/eight.png';
import nine from './images/nine.png';
import ten from './images/ten.png';
;
function App() {
  return (
    <div className="App">
     <h1>Our technology partner</h1>
      <Marquee play>
        <div className='image_wrapper'>
        <img src={one} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={two} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={three} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={four} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={five} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={six} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={seven} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={eight} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={nine} className="App-logo" alt="logo" />
        </div>
        <div className='image_wrapper'>
        <img src={ten} className="App-logo" alt="logo" />
        </div>
      </Marquee>  
    </div>
  );
}

export default App;
