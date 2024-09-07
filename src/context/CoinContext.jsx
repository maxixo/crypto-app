import { createContext, useEffect, useState } from 'react';
import { fetchAllCoin } from '../functions/fetchAllCoin';
import { fetchTrending } from '../functions/fetchTrending';
import { fetchNews } from '../functions/fetchNews';
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [trending, setTrending] = useState([]);
    const [news, setNews] = useState([]);
    const [transactions, setTransactions] = useState([]); // Store transactions globally
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$',
    });

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const coins = await fetchAllCoin(currency);
                setAllCoin(coins);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCoins();
    }, [currency]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const trendingCoins = await fetchTrending();
                setTrending(trendingCoins);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTrendingCoins();
    }, []);

    useEffect(() => {
        const fetchNewsData= async () => {
            try {
                const newsData = await fetchNews();
                setNews(newsData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchNewsData();
    }, []);


    


    // Function to add a transaction
    const addTransaction = (coinName, amount, price) => {
        const selectedCoin = allCoin.find((coin) => coin.name === coinName);
        if (selectedCoin) {
          const newTransaction = {
            name: selectedCoin.name,
            amount,
            price: selectedCoin.current_price, // Get current price from allCoin
          };

        setTransactions([...transactions, newTransaction]);

    };

    
}
  // Function to delete a transaction
  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };
            
            
    const contextValue = {
        allCoin,
        trending, // Ensure this is correctly set
        currency,
        news,
        transactions,
        deleteTransaction,
        addTransaction, // Ensure this is correctly set
        setCurrency,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
