import { useEffect } from 'react';
import './App.css';
import Portfolio from './components/portfolio/portfolio.component';

function App() {

  useEffect(() => {
    fetch('/.netlify/functions/get-stock-data')
      .then(response => response.json())
      .then(data => console.log(data));
  })

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
