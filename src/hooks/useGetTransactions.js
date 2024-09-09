import { useState, useEffect } from 'react';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const { userID } = useGetUserInfo();
    const transactionCollectionRef = collection(db, 'transactions');

    // Function to get transactions from localStorage for the current user
    const getLocalStorageTransactions = (userID) => {
        const storedTransactions = localStorage.getItem(`transactions_${userID}`);
        return storedTransactions ? JSON.parse(storedTransactions) : [];
    };

    // Function to save transactions to localStorage for the current user
    const saveTransactionsToLocalStorage = (userID, transactions) => {
        localStorage.setItem(`transactions_${userID}`, JSON.stringify(transactions));
    };

    // Fetch transactions from Firebase and update localStorage
    const getTransactions = async () => {
        if (!userID) return;

        try {
            // First, load from localStorage for the current userID
            const localTransactions = getLocalStorageTransactions(userID);
            setTransactions(localTransactions);

            // Firebase query to get real-time transactions for the current user
            const queryTransactions = query(
                transactionCollectionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
            );

            // Listen to Firebase updates
            const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    docs.push({ ...data, id });
                });

                // Update transactions state with data from Firebase
                setTransactions(docs);

                // Save fetched Firebase transactions to localStorage for this user
                saveTransactionsToLocalStorage(userID, docs);
            });

            return unsubscribe;
        } catch (error) {
            console.error("Error fetching transactions: ", error);
        }
    };

    useEffect(() => {
        if (userID) {
            const unsubscribe = getTransactions();
    
            // Ensure the unsubscribe function is actually returned from the Firebase listener
            return () => {
                if (unsubscribe && typeof unsubscribe === 'function') {
                    unsubscribe(); // Clean up the listener correctly
                }
            };
        }
    }, [userID]);
    return { transactions };
};
