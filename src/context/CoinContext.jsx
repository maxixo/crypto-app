import { createContext, useEffect, useState } from 'react';
import { fetchAllCoin } from '../functions/fetchAllCoin';
import { fetchTrending } from '../functions/fetchTrending';
import { fetchNews } from '../functions/fetchNews';
export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [trending, setTrending] = useState([]);
    const [news, setNews] = useState([]);
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


        
            
    const contextValue = {
        allCoin,
        trending, // Ensure this is correctly set
        currency,
        news,
        setCurrency,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
};

export default CoinContextProvider;
