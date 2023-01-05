import './App.scss';
import './scss/components.scss'
import Leds from './components/leds';
import BigLed from './components/big-led';
import Line from './media/line.svg'
import {Form} from './components/form';
import Screen from './components/screen';
import GreenScreen from './components/green-screen';
import DirectionsButtons from './components/arrowButtons';
import LargeButtons from './components/largeButtons';


function App() {
  return (
    <section className="left-part">
      <div className="top-leds">    
        <BigLed/>
        <Leds/>
      </div>
      <img src={Line} className="line" alt="linea"/>
      {Form()}
      <Screen/>
      <LargeButtons/>
      <div className="buttons-screen">
        <GreenScreen/>
        <DirectionsButtons/>
      </div>
    </section>
  );
}

export default App;
