import React, {useContext} from 'react';
import CountUp from 'react-countup';
import { CoinContext } from '../../context/CoinContext';

const AnimatedCounter = ({ end }) => {
  const { totalAmountInvested } = useContext(CoinContext); // Access the total amount invested from context

  return (
    <div className='w-full'>
      <CountUp 
        decimals={2}
        decimal=','
        prefix="$"
        end={totalAmountInvested}
      />
    </div>
  );
};

export default AnimatedCounter;
