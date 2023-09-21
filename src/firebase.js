// firebase.js
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};



// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const useAuth = () => auth;

// export const auth = firebase.auth();

// export default firebase;
export default app; // Export the authentication service
