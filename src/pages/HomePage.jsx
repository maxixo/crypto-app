import React from 'react'
import CoinTable from '../components/CoinTable'
import Trending from '../components/Trending'
import NewsCard from "../components/NewsCard"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Brands from "../components/Brands"
import { useContext } from 'react'
import { CoinContext } from '../context/CoinContext'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"




const HomePage = () => {

const {allCoin, currency, setCurrency, trending = [] } = useContext(CoinContext);
const [displayCoin , setDisplayCoin] = useState([]);

useEffect(() => {
  setDisplayCoin(allCoin);
}, [allCoin]);

  
const currencyHandler = (e) => {

  switch (e.target.value){
    case 'usd': {
     setCurrency({name:'usd', symbol: '$'});
     break;
   }
   case 'eur': {
     setCurrency({name:'eur', symbol: '€'});
     break;
   }
   case 'ngn': {
     setCurrency({name:'ngn', symbol: '₦'});
     break;
   }
   default : {
     setCurrency({name:'usd', symbol: '$'});
     break;
   }
  }

}



  return (
    <div className='min-h-screen m-10 flex flex-col'>
      <div>
      <Navbar currencyHandler={currencyHandler}/>

      </div>
         
         <div className="mt-10 ">
         <Trending
         allCoin={allCoin}
         trending={trending}
         />
         </div>
         <div className="pt-20 mx-10">
         <CoinTable
         displayCoin={displayCoin}
         currency={currency}
         />
         </div>
         <div className="flex items-center justify-center mt-10">
         <h1 className="font-bold text-3xl my-10">Get your daily Crypto News </h1>
        </div>
        <div className='mx-10'>
        <NewsCard/>
        <Brands/>
        <Footer/>
        </div>
     

    </div>
  )
}

export default HomePage