import React from 'react'
import Rate from '../shared/Rate'
import ChevronDown from './../../assets/svg/chevronDown.jsx'
import ChevronUp from './../../assets/svg/chevronUp.jsx'


const styles = {
    trendingCardRow: 'flex items-center justify-between mb-4 text-[0.93rem] ',
    red: 'mx-3 text-red-300',
    green: 'mx-3 pl-3 text-green-300',
}

const TrendingCardRow = ({
    number , image, name , price24, currentprice, 

  }) => {
  return (
    <div className={styles.trendingCardRow}>
        <div className='w-full flex'>{number}
          <div className='mx-5'>
             {<img src={image } width={20} height={20}/>}
          </div>
          <p className='font-bold'>
             {name}
          </p>
    </div>
    <p>{currentprice}</p>
    <div className='flex items-center gap-5 pr-5'> 
     <p className=''>{price24.toFixed(2)}% </p> 
    <p  className >{price24  > 0 ? <ChevronUp fill='#17C784'/> : <ChevronDown fill='#EA3943'/>  }</p>
    </div>
  
    </div>
  )
}

export default TrendingCardRow