import React from 'react'
import Logo from '../assets/Logo.png'



const styles = {
  headerwrapper: 'border-2 w-full border-red-200 flex r h-full max-w-screen-xl justify-between  px-4',
  nav: 'flex justify-center h-20 gap-[70px] items-center',
  navItem: 'relative mr-1 text-xl font-bold cursor-pointer hover:opacity-60',
  navLink: 'text-blue-500 hover:text-blue-700',
  badge: 'inline-block w-[5px] h-[5px] rounded-full bg-red-500'
}




const Header = () => {


  return (
    <div className='bg-gray-400 h-25 justify-between  text-white flex gap-[100px] w-full p-[30px] border-2 border-blue-300 '>
       
       <img 
        src={Logo} alt="logo" height={200} width={200} style={{marginLeft:'50px'}} 
        />
  
      
       <div className={styles.headerwrapper}>
        <div className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
               CryptoCurrencies

            </div>
          
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>
                Exchanges
            </div>
        </div>
        <div className={styles.navItem}>
            <div className={styles.navLink}>
               Portfolio
            </div>
       </div> 
       <div className={styles.navItem}>
            <div className={styles.navLink}>
              News
            </div>
       </div>
       <div className={styles.navItem}>
            <div className={styles.navLink}>
              Learn
            </div>
       </div>
    
      </div>
      <div className='flex w-full justify-center gap-[50px]    '>
      <button>Sign Up</button>
      <button>Sign In</button>
      </div>
      
    </div>
    </div>
  )
}

export default Header