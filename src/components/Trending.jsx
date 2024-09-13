import React , {useContext, useState} from 'react'
import fire from '../assets/fire.png'
import ReactSwitch from 'react-switch'
import Rate from './shared/Rate'
import TrendingCard from './ui/TrendingCard'

import gainers from '../assets/gainers.png'


const styles = {
  trendingWrapper: 'mx-auto max-w-screen-2xl',
  h1: 'text-3xl text-white',
  flexCenter: "flex items-center"
}




const Trending = ({allCoin, trending}) => {  
  
const [checked, setChecked] = useState(false)





  return (
    <div className='text-white' id="trend" >
      <div className={styles.trendingWrapper}>
         <div className='flex justify-between px-20'>
            <h1 className={styles.h1}>Todays cryptcurrency prices</h1>
        c
         <div className='flex '>
          <p className='text-white text-lg '>Highlights &nbsp; </p> 
           <ReactSwitch  className='sm:hidden lg:visible' checked={checked} onChange={() =>{setChecked(!checked)} }/>
         </div>
         </div>
         <br/>
         <div className='flex pl-20 '>
           <p className='text-gray-100'>The global cryptomarket cap is 
            $1.74T, a  &nbsp; <span className='inline-block' ><Rate isIncrement={true} rate='0.53'/></span>
           </p>
           <p> &nbsp; decrease over the last day. <span className='underline'>Read More</span></p>
         </div>
         <br/>

         <div className={styles.flexCenter}>
 

        <div className='flex flex-col sm:w-[80vh] lg:w-full p-5 lg:flex-row mx-auto w-full gap-10'>
          <TrendingCard  title = 'Gaining Coins' icon = {fire}
            trendingData = {allCoin} />

     
           <TrendingCard title = 'Top NFTs' icon = {gainers}
           trendingData = {trending} />


          </div>
        
       



         </div>
         
      </div>
       
    </div>
  )
}

export default Trending