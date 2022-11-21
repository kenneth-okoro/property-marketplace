import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBeKpJttl-8CPE3YiT0Ej3CWJsV3z7WB2g',
  authDomain: 'marketplace-app-9ae5a.firebaseapp.com',
  projectId: 'marketplace-app-9ae5a',
  storageBucket: 'marketplace-app-9ae5a.appspot.com',
  messagingSenderId: '260821144489',
  appId: '1:260821144489:web:6615014030b22cfc8aeab8',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();