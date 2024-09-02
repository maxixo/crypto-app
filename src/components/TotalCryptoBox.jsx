import React from 'react'
import AnimatedCounter from '../AnimatedCounter'
import DoughnutChart from '../DoughnutChart'

const TotalCryptoBox = ({
    accounts = [],  totalCoins , totalCurrentBalance
}) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
          <DoughnutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
            Bank Account : {totalCoins} 
            </h2>
            <div className='flex flex-col gap-2'>
                   Total Current Balance 
             <p className='total-balance-label'>
                 </p>
           <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} />
             
                </div>

            </div>

        </div>
    </section>
  )
}

export default TotalCryptoBox;