import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";  // Make sure the Firebase config is correct


export const useDeleteTransaction = () => {
  const deleteTransaction = async (transactionId) => {
    try {
      if (!transactionId) {
        throw new Error('Transaction ID is required');
      }

      // Log the transaction ID to ensure it's correct
      console.log('Attempting to delete transaction with ID:', transactionId);

      // Reference to the document
      const docRef = doc(db, 'transactions', transactionId);
      
      // Check if the document exists before attempting to delete it
      const docSnapshot = await getDoc(docRef);
      if (!docSnapshot.exists()) {
        throw new Error('Document does not exist');
      }

      // Delete the document
      await deleteDoc(docRef);

      console.log('Transaction deleted successfully!');
    } catch (error) {
      console.error('Error deleting transaction: ', error);
    }
  };

  return { deleteTransaction };
};
