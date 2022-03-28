import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('/.netlify/functions/get-stock-data').then(response => alert(response));
  })

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
