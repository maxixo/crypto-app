import {addDoc ,doc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../config/firebase-config";
import {useGetUserInfo} from "./useGetUserInfo"


export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db,"transactions");
    const {userID} = useGetUserInfo()
 
    const addTransaction = async ({ selectedCoin, amount, pricePerCoin }) => {
     try {
       if (!userID) throw new Error("User ID is undefined");

       const docRef = doc(db, 'transactions', selectedCoin + '-' + new Date().toISOString());

 
       await addDoc(transactionCollectionRef, {
         userID,
         selectedCoin, 
         amount,
         pricePerCoin,
         createdAt: serverTimestamp(),
       });
 
       console.log("Transaction added successfully!", docRef.id);
       return docRef.id;
     } catch (error) {
       console.error("Error adding transaction: ", error);
     }
   };

    
  return { addTransaction };
 }