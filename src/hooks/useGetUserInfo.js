export const useGetUserInfo = () => {
    const storedAuth = localStorage.getItem('auth'); // Get the auth data from localStorage
    let auth = null;
  
    // Safely parse the auth data with error handling
    try {
      auth = storedAuth ? JSON.parse(storedAuth) : null;
    } catch (error) {
      console.error('Error parsing auth data:', error);
    }
  
    // Safeguard if auth is null or undefined
    const name = auth ? auth.name : null;
    const profilePhoto = auth ? auth.profilePhoto : null;
    const userID = auth ? auth.userID : null;
    const isAuth = auth ? auth.isAuth : false;
  
    return { name, profilePhoto, userID, isAuth };
  };
  