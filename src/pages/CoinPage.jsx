import React, {useState, useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { CoinContext } from '../context/CoinContext';
import "../styles/coin.css"
import LineChart from '../components/LineChart';
import Navbar from '../components/NavBar';

const CoinPage = () => {

  const { id } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData , setHistoricalData] = useState();
  const {currency} = useContext(CoinContext)

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb' }
    };
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

const fetchHistoricalData = async () => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb' }
  };
  
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
    const data = await response.json();
    setHistoricalData(data);
  } catch (err) {
    console.error(err);
  }
}


  useEffect(() =>{
    fetchCoinData()
    fetchHistoricalData()
  }, [currency])

  if (coinData, historicalData) {
  return (

  
    <div className='coin'>
      <Navbar/>
      <div className="coin-name">
      {coinData?.image.large ? (
       <img src={coinData.image.large} alt="logo" />
      ) : (
        <p>Loading or no image available</p>
      )}
       <p><b>{coinData?.name}({coinData.symbol?.toUpperCase})</b></p>
      </div>
       <div className="coin-chart">
        <LineChart historicalData={historicalData}/>
       </div>
       <div className="coin-info">
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name]
          .toLocaleString()}</li>

        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>

        </ul>
         <ul>
          <li>24 Hour High</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.
          name].toLocaleString()}</li>

        </ul>
         
        <ul>
          <li>24 Hour low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.
          name].toLocaleString()}</li>

        </ul>
       </div>
      
       </div>
  )
} else {
  return (
    <div className='spinner'>
          <div className='spin'></div>
    </div>
  
  )
}
}
export default CoinPage


