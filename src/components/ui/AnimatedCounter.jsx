import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ end }) => {
  return (
    <div className='w-full'>
      <CountUp 
        decimals={2}
        decimal=','
        prefix="$"
        end={end}
      />
    </div>
  );
};

export default AnimatedCounter;
