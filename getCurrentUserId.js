import { getAuth } from 'firebase/auth';
//Help function that pulls the id from firestore database 
const getCurrentUserId = () => {
  const auth = getAuth(); // Initialize Firebase Auth instance

  // Get the current user
  const user = auth.currentUser;

  // If user is authenticated, return user's UID (user ID), otherwise return null
  return user ? user.uid : null;
};

export default getCurrentUserId;