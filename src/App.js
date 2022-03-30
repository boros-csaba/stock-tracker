import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Portfolio from './components/portfolio/portfolio.component';

function App() {

  const [stockPrices, setStockPrices] = useState({});
  const [portfolioItems, setPortfolioItems] = useState([
    {
      ticker: 'SXR.DE',
      purchaseDate: '2022-01-04',
      quantity: 1,
      purchasePrice: 434.32,
      currency: 'EUR'
    },
    {
      ticker: 'IUSN.DE',
      purchaseDate: '2022-01-05',
      quantity: 53,
      purchasePrice: 6.61,
      currency: 'EUR'
    }
  ]);

  useEffect(() => {
    fetch('/.netlify/functions/get-stock-data')
      .then(response => response.json())
      .then(data => setStockPrices(data));
  }, [])

  return (
    <div className="App">
      <Portfolio portfolioItems={portfolioItems} />
    </div>
  );
}

export default App;
