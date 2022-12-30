import './App.css';
import Leds from './components/leds';
import BigLed from './components/big-led';
import Line from './media/line.svg'

function App() {
  return (
    
    <section class="left-part">
    <img src={Line} alt="linea" />

      <BigLed/>
      <Leds/>
    </section>
  );
}

export default App;
