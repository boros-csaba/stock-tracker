import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portfolio from './components/portfolio/portfolio.component';

function App() {

  const [stockPrices, setStockPrices] = useState({});
  const [portfolioItems, setPortfolioItems] = useState([
    {
      ticker: 'VSIX.DE'
    },
    {
      ticker: 'IUSN.DE'
    }
  ]);

  useEffect(() => {
    fetch('/.netlify/functions/get-stock-data')
      .then(response => response.json())
      .then(data => setStockPrices(data));
  }, [])

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
