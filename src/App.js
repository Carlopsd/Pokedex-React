import './App.css';
import Led from './components/led';
import BigLed from './components/big-led';

function App() {
  return (
    <section class="left-part">
      <div class="leds">
        <BigLed/>
        <Led/>
        <Led/>
        <Led/>
      </div>
    </section>
  );
}

export default App;
