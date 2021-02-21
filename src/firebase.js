import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'crud-react-b797d.firebaseapp.com',
  databaseURL: 'https://crud-react-b797d.firebaseio.com',
  projectId: 'crud-react-b797d',
  storageBucket: 'crud-react-b797d.appspot.com',
  messagingSenderId: '412476770665',
  appId: '1:412476770665:web:ccfbe7f88db7a7905bd5f8',
};

// Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
export { db, auth };
