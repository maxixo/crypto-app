import React from 'react'
import MoreButton from '../shared/MoreButton'
import TrendingCardRow from './TrendingCardRow'
import { data } from 'autoprefixer'


const styles = {
   trendingCard: 'w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3 ',
   trendingWrapper:'flex items-center justify-between',
}
const TrendingCard = ({title, icon, trendingData}) => {

 // Initialize trendingDataArray
  let trendingDataArray = [];

  // Check if trendingData is an object and contains an array
  if (typeof trendingData === 'object' && !Array.isArray(trendingData)) {
    // Extract the array from the object
    // Example: Assuming trendingData contains an array inside a key like 'data'
    if (Array.isArray(trendingData.nfts  )) {
      trendingDataArray = trendingData.nfts.slice(0, 6); 
    }

    else if  // Extract another arrayf it exists (e.g., items)
       (Array.isArray(trendingData.coins)) {
      coinsArray = trendingData.coins.slice(0, 6); // Limit to 6 items
    }
    
    else {
      // If the data structure is different, adapt as needed
      // For example, if nested arrays are directly inside trendingData:
      trendingDataArray = trendingData.flat ? trendingData.flat() : []; // Flatten if needed
    }
  } else {
    // If trendingData is already an array or not an object, use it directly
    trendingDataArray = Array.isArray(trendingData) ? trendingData : [];
  }
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingWrapper}>
          <div className='flex'>
            {icon &&
                <img src={icon} width={27} height={27} alt='icon'/>}
               &nbsp; &nbsp;
               <p className='font-bold'>{title}</p>   
          </div>
          <MoreButton />
          </div>
          <br/>
          {trendingDataArray.map((item, id) => {
             return (
                <TrendingCardRow
                key={id}
                number={item.number}
                symbol={item.symbol }
                name={item.name}
                icon={item.icon}
                image={item.image|| item.thumb}
                price24={item.price_change_percentage_24h}
                currentprice={item.currentprice}
                      
  
                />
             )
          })}
        </div>


  )
}

export default TrendingCard