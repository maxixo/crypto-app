import React, {useContext} from 'react'
import AnimatedCounter from './ui/AnimatedCounter'
import DoughnutChart from './ui/DoughnutChart'
import LineChart from '../assets/svg/LineChart'
import { CoinContext } from '../context/CoinContext'


const styles = {
  totalBalance: ` flex w-[40vw] items-center mt-5 ml-5 gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6;`,
  totalBalanceChart: `flex size-full max-w-[100px] items-center sm:max-w-[120px];`,
  totalBalanceLabel: `text-14 font-medium text-gray-600;`,
  totalBalanceAmount: `text-24 lg:text-30 flex-1 font-semibold text-gray-900;`,

}


const PortfolioPage = () => {

  const { transactions } = useContext(CoinContext);

  // Calculate the total coins and total amount invested
  const totalCoins = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalAmountInvested = transactions.reduce((sum, transaction) => sum + (transaction.amount * transaction.price), 0);

  return (
        <>
        <div className='flex ml-7 flex-col items-start gap-5'>
      <div className='flex gap-3 mt-10 items-center ml-7'> 
        <h2 className='text-4xl '>Welcome back to your portfolio</h2>
        <LineChart/>
      </div>

        <section className={styles.totalBalance}>
         <div className={styles.totalBalanceChart}>
          <DoughnutChart transactions={transactions}/>
         </div>
        <div className='flex flex-col gap-6'>
              <h2 className='header-2'>
               Wallet Balance :  
              </h2>
              <div className={styles.totalBalanceLabel}>
                Total Coins
              <p className='total-balance-label'>
                {totalCoins.toLocaleString()}
              </p>
              <div className={styles.totalBalanceLabel}>
                <AnimatedCounter end={totalAmountInvested} />
              </div>
           </div>
         </div>
      </section>
      </div>
    
    
      </>
   
  )
}

export default PortfolioPage