import React, { useState, useContext } from 'react';
import { CoinContext } from "../context/CoinContext"; // Import your context
import "../styles/DashboardPage.css";



    const DashboardPage = () => {
      const { allCoin,
              handleAddTransaction,
              pricePerCoin,
              handleSelectCoin,
              selectedCoin,
              setSelectedCoin, 
              handleDeleteTransaction,
              totalCoins,
              transactions,
              totalAmountInvested, } = useContext(CoinContext); // Access CoinData from context

    const [amount, setAmount] = useState(0);
    

  

  // Handle form submission to add transaction
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCoin || amount <= 0) {
      alert('Please select a valid coin and enter a valid amount.');
      return;
    }

    await handleAddTransaction({ selectedCoin, amount , pricePerCoin});

    // Clear the input fields after adding the transaction
    setSelectedCoin('');
    setAmount(0);
  };

  return (
    <div className='h-full min-h-screen '>
     
      <form
        onSubmit={handleSubmit}
        className='flex justify-center relative bottom-20 align-center gap-10'
      >
        {/* First input for coin name from API (read-only) */}
        <div>
          <label>Coin Name:</label>
          <input
            list="coin-list"
            value={selectedCoin}
            onChange={(e) => handleSelectCoin(e.target.value)} // Call handleSelectCoin to update coin and price
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
       <div className='flex flex-col gap-5 relative bottom-20 border-red-400 border-2 mx-auto'>
            {/* Display list of transactions */}
      <h3 className='flex justify-center mx-auto items-center'>Transactions</h3>
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.selectedCoin}</td>
              <td>{transaction.amount}</td>
              <td>${transaction.pricePerCoin.toFixed(2)}</td>
              <td>${(transaction.amount * transaction.pricePerCoin).toFixed(2)}</td>
              <td>
              <button
                  onClick={() => handleDeleteTransaction(transaction.id)} // Pass transaction id
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