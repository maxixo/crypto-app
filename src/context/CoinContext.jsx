import { createContext, useEffect, useState } from 'react';
import { fetchAllCoin } from '../functions/fetchAllCoin';
import { fetchTrending } from '../functions/fetchTrending';
import { fetchNews } from '../functions/fetchNews';
import { useAddTransaction } from '../hooks/useAddTransaction';
import { useDeleteTransaction } from '../hooks/useDelTransactions';  
import { useGetTransactions } from '../hooks/useGetTransactions';// Import the custom hook

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoin, setAllCoin] = useState([]);
    const [trending, setTrending] = useState([]);
    const [news, setNews] = useState([]);
    const [transactions, setTransactions] = useState([]); // Store transactions globally
    const [selectedCoin, setSelectedCoin] = useState(null); // Selected coin state
    const [pricePerCoin, setPricePerCoin] = useState(0); // Price per coin state
    const [totalCoins, setTotalCoins] = useState(0);
    const [totalAmountInvested, setTotalAmountInvested] = useState(0);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$',
    });
    const {addTransaction} = useAddTransaction();
    const { deleteTransaction } = useDeleteTransaction(); 
    const { getTransactions } = useGetTransactions();  // Fetch transactions from the backend

     // Use the deleteTransaction function


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


     // Function to set selected coin and price
     const handleSelectCoin = (coinName) => {
        const coin = allCoin.find((coin) => coin.name === coinName);
      
        if (coin) {
          setSelectedCoin(coin.name); // Set the selected coin's name
          setPricePerCoin(coin.current_price); // Set the coin's price
        } else {
          setPricePerCoin(0); // Fallback if no coin is found
        }
      };

    // Function to add a transaction
  
 
    const handleAddTransaction = async (transactionData) => {
        try {
          const transactionId = await addTransaction(transactionData);  // Save the transaction in Firestore and get the ID
          const newTransaction = { id: transactionId, ...transactionData };  // Include the generated ID in the transaction object
    
          setTransactions((prev) => [...prev, newTransaction]);  // Add it to the local state
        } catch (error) {
          console.error('Error adding transaction: ', error);
        }
      };

     
      const handleDeleteTransaction = async (transactionId) => {
        try {
            // Call deleteTransaction function from your hook
            await deleteTransaction(transactionId);
            
            // Update the transactions state by removing the deleted transaction
            setTransactions((prevTransactions) => 
              prevTransactions.filter(transaction => transaction.id !== transactionId)
            );
          } catch (error) {
            console.error("Error deleting transaction: ", error);
          }
        };


        // // Inside useEffect in CoinContext
        // useEffect(() => {
        //     const loadTransactions = async () => {
        //         const fetchedTransactions = await getTransactions(); // Now this will correctly fetch transactions
        //         setTransactions(fetchedTransactions); // Set the fetched transactions to state
        //     };

        //     loadTransactions();
        // }, []);

        
        useEffect(() => {
            const calculatedTotalCoins = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0);
            const calculatedTotalAmountInvested = transactions.reduce(
              (sum, transaction) => sum + (transaction.amount * transaction.pricePerCoin),
              0
            );
        
            setTotalCoins(calculatedTotalCoins);
            setTotalAmountInvested(calculatedTotalAmountInvested);
          }, [transactions]);
        

          useEffect(() => {
            const storedTransactions = localStorage.getItem('transactions');
            const storedTotalCoins = localStorage.getItem('totalCoins');
          
            if (storedTransactions && storedTotalCoins) {
              setTransactions(JSON.parse(storedTransactions));
              setTotalCoins(JSON.parse(storedTotalCoins));
            }
          }, []);
          
          useEffect(() => {
            // Save to localStorage whenever transactions or totalCoins change
            if (transactions.length > 0) {
              localStorage.setItem('transactions', JSON.stringify(transactions));
            }
            localStorage.setItem('totalCoins', totalCoins);
          }, [transactions, totalCoins]);

          
  // Function to delete a transaction
//   const deleteTransaction = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//   };
            
            
    const contextValue = {
        allCoin,
        trending, // Ensure this is correctly set
        currency,
        news,
        selectedCoin,
        setSelectedCoin,
        pricePerCoin,
        transactions,
        handleSelectCoin,
        handleAddTransaction,
        handleDeleteTransaction,
        setCurrency,
        totalCoins,
        totalAmountInvested,
    };

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
  
}


export default CoinContextProvider;
