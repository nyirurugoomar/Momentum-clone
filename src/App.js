
import './App.css';
import Date from './components/Date';
import Quote from './components/Quote';
import Time from './components/Time';
import Wether from './components/Wether';

function App() {
  return (
    <div>
      <Wether/>
      <Time/>
      <Date/>
      <Quote/>
    </div>
  );
}

export default App;
