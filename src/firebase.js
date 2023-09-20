// firebase.js
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEpCfu8y4CIXjwsqw32GkN1yP14JDKFwU",
  authDomain: "drag-and-drop-gallery-58732.firebaseapp.com",
  projectId: "drag-and-drop-gallery-58732",
  storageBucket: "drag-and-drop-gallery-58732.appspot.com",
  messagingSenderId: "1074687780577",
  appId: "1:1074687780577:web:b174617db531d99a3639a0",
};


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const useAuth = () => auth;

// export const auth = firebase.auth();

// export default firebase;
export default app; // Export the authentication service
