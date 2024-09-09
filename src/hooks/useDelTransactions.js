import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";  // Make sure the Firebase config is correct


export const useDeleteTransaction = () => {
    const deleteTransaction = async (transactionId) => {
      try {
        // Create a reference to the document you want to delete in the "transactions" collection
        const docRef = doc(db, 'transactions', transactionId);
  
        // Delete the document from Firestore
        await deleteDoc(docRef);
  
        console.log('Transaction deleted successfully!');
      } catch (error) {
        console.error('Error deleting transaction: ', error);
      }
    };
  
    return { deleteTransaction };
  };
  