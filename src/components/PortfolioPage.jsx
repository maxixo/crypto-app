import React, {useContext} from 'react'
import AnimatedCounter from './ui/AnimatedCounter'
import DoughnutChart from './ui/DoughnutChart'
import LineChart from '../assets/svg/LineChart'
import { CoinContext } from '../context/CoinContext'
import { useGetUserInfo } from '../hooks/useGetUserInfo'


// const styles = {
//   totalBalance: ` flex w-[40vw] h-[50vh] items-center h-[50vh] gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6;`,
//   totalBalanceChart: `flex size-full max-w-[100px] items-center sm:max-w-[120px];`,
//   // totalBalanceLabel: `h-[50vh] text-14 font-medium text-gray-600;`,
//   totalBalanceAmount: `text-24 lg:text-30 flex-1 font-semibold text-gray-900;`,

// }



const PortfolioPage = () => {
   const {totalCoins} = useContext(CoinContext);
   const {name} = useGetUserInfo()


  // Calculate the total coins and total amount invested

  return (
        <>
        <div className='flex ml-7 flex-col items-start gap-5'>
      <div className='flex gap-3 mt-5 items-center ml-7'> 
        <h2 className='text-3xl flex gap-3'>Welcome back to your portfolio <p className='text-gray-500 flex'>{name}!</p> </h2>
      </div>

        <section className='flex relative bottom-8 flex-row items-center gap-5'>
         <div className='flex w-15'>
          <DoughnutChart/>
         </div>
        <div className='flex flex-row gap-6'>
              <h2 className='header-2 font-medium'>
               Wallet Balance :
               <AnimatedCounter end className="h-full" />
  
              </h2>
              <div className='font-medium'>
                Total Coins
              <p className='total-balance-label'>
                {totalCoins.toLocaleString()}
              </p>
            
           </div>
         </div>
      </section>
      </div>
    
    
      </>
   
  )
}

export default PortfolioPage