import React, { useState, useContext } from 'react';
import { CoinContext } from "../context/CoinContext"; // Import your context
import "../styles/DashboardPage.css";

const DashboardPage = () => {
  const { allCoin,  addTransaction, transactions, deleteTransaction } = useContext(CoinContext); // Access CoinData from context
  const [selectedCoin, setSelectedCoin] = useState('');
  const [amount, setAmount] = useState(0);

    // Find the selected coin's current price from allCoin
    const selectedCoinData = allCoin.find((coin) => coin.name === selectedCoin);
    const currentPrice = selectedCoinData ? selectedCoinData.current_price : 0;


  // Calculate total coins and total amount invested
  const totalCoins = transactions.reduce((sum, transaction) => sum + Number(transaction.amount), 0);
  const totalAmountInvested = transactions.reduce((sum, transaction) => sum + (transaction.amount * transaction.price), 0);


  

  // Handle form submission to add transaction
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the transaction through context function
    addTransaction(selectedCoin, amount);

    // Clear the input fields after adding the transaction
    setSelectedCoin('');  // Clear the coin name input
    setAmount(0);         // Clear the amount input
  };
  return (
    <div className='h-full min-h-screen '>
     
      <form
        onSubmit={handleSubmit}
        className='flex justify-center align-center gap-10'
      >
        {/* First input for coin name from API (read-only) */}
        <div>
          <label>Coin Name:</label>
          <input
            list="coin-list"
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            required
          />
         <datalist id="coin-list">
            {/* Map through the CoinData to populate the datalist */}
            {allCoin?.map((coin) => (
              <option key={coin.id} value={coin.name}>
                {coin.name}
              </option>
            ))}
          </datalist>
        </div>

        {/* Second input for the number of coins invested */}
        <div>
          <label>Amount Invested:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        {/* Button to add the transaction */}
        <button type="submit">Add Transaction</button>
      </form>
       <div className='flex flex-col gap-5 border-red-400 border-2 mx-auto'>
            {/* Display list of transactions */}
      <h3 className='flex align-center mx-auto pt-5'>Transactions</h3>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Amount</th>
            <th>Price per Coin (USD)</th>
            <th>Total Amount (USD)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.amount}</td>
              <td>${transaction.price.toFixed(2)}</td>
              <td>${(transaction.amount * transaction.price).toFixed(2)}</td>
              <td>
                <button
                  onClick={() => deleteTransaction(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* Display totals */}
          <tr className="totals-row">
            <td><strong>Totals:</strong></td>
            <td><strong>{totalCoins}</strong></td>
            <td></td>
            <td><strong>${totalAmountInvested.toFixed(2)}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
       </div>
   
    </div>
  );
};


export default DashboardPage;