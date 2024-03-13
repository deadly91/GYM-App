import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5wpdbS8L8ZjqxhIX4HdnMugYEz-AMC7c",
  authDomain: "gym-app-a4487.firebaseapp.com",
  projectId: "gym-app-a4487",
  storageBucket: "gym-app-a4487.appspot.com",
  messagingSenderId: "351597642819",
  appId: "1:351597642819:web:18a64278d6941fcec440f6",
  measurementId: "G-3EQR9RL2Q1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };