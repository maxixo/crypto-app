import React , {useContext, useState} from 'react'
import fire from '../assets/fire.png'
import ReactSwitch from 'react-switch'
import Rate from './shared/Rate'
import TrendingCard from './ui/TrendingCard'
// import RecentlyAdded from './RecentlyAdded'
// import Gainers from './Gainers'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'


import { CoinContext } from '../context/CoinContext'


const styles = {
  trendingWrapper: 'mx-auto max-w-screen-2xl',
  h1: 'text-3xl text-white',
  flexCenter: "flex items-center"
}




const Trending = ({allCoin, trending}) => {  
  
const [checked, setChecked] = useState(false)

// const [allCoin, setAllCoin] = useState([])


// const {allCoin, trending = [] } = useContext(CoinContext);

//  const [showCoin , setshowCoin] = useState([]);


    // console.log(trending);
    // console.log (allCoin);

//  useEffect(() =>{
//    setshowCoin(allCoin)
//  }, [allCoin])

//  console.log(showCoin);



// const fetchAllCoin = async () => {
//   const options = {
//     method: 'GET',
//     headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-LkCTiWUTchgywENzy4GhQ4Vb'}
//   };
  
//   fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
//     .then(response => response.json())
//     .then(response =>{
//       const limitedResponse = response.slice(0, 10);
//       setAllCoin(limitedResponse)
//       })
//     .catch(err => console.error(err));
// }

// useEffect(() => {
//   fetchAllCoin();
// }, [])







  return (
    <div className='text-white' id="trend" >
      <div className={styles.trendingWrapper}>
         <div className='flex justify-between px-20'>
            <h1 className={styles.h1}>Todays cryptcurrency prices</h1>
        
         <div className='flex '>
          <p className='text-gray-400 text-lg'>Highlights &nbsp; </p> 
           <ReactSwitch checked={checked} onChange={() =>{setChecked(!checked)} }/>
         </div>
         </div>
         <br/>
         <div className='flex pl-20 '>
           <p className='text-gray-400'>The global cryptomarket cap is 
            $1.74T, a &nbsp;
           <span><Rate isIncrement={true} rate='0.53'/></span>
           </p>
           <p> &nbsp; decrease over the last day. <span className='underline'>Read More</span></p>
         </div>
         <br/>

         <div className={styles.flexCenter}>
          
          {/* {allCoin.map((item , id) => (
                 <div key={id}>
                 <p>{item.name}</p> 
                  <p>{item.symbol}
                  </p>
                 </div>

          ))} */}

        <div className='flex flex-col sm:w-[80vh] lg:w-full p-5 lg:flex-row mx-auto w-full gap-10'>
          <TrendingCard  title = 'Gaining' icon = {fire}
            trendingData = {allCoin} />

          {/* <TrendingCard title = 'Gaining' icon = {fire}
            trendingData = {trendingData} />

          <TrendingCard title = 'Recently Added' icon = {fire}
            trendingData = {trendingData} /> */}

           <TrendingCard title = 'Categories' icon = {recent}
           trendingData = {trending} />
{/* 
            <TrendingCard title = 'Gainers' icon = {gainers}
           trendingData = {trending} />  */}
         


          </div>
        
       



         </div>
         
      </div>
       
    </div>
  )
}

export default Trending