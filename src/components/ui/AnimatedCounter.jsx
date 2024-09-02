'use client';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div className='w-full' >
       <CountUp 
      decimals={2}
      decimal =','
      prefix="$"
      end={100}
       />
    </div>
  );
};

export default AnimatedCounter;
