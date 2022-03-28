import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('/.netlify/functions/get-stock-data')
      .then(response => response.json())
      .then(data => console.log(data));
  })

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
