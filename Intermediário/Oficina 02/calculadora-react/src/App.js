import logo from './logo.svg';
import './App.css';

import Calculadora from './componentes/Calculator';
import {CalculatorProvider} from './componentes/CalculatorContext';

function App() {
  return (
    <div className="App container">
      <CalculatorProvider>
          <Calculadora/>
      </CalculatorProvider>
    </div>
  );
}

export default App;
