import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyD7dRIA5D78TP69lEfwriv4U4YjQoiuK-M",
  authDomain: "rent-a-car-gom.firebaseapp.com",
  databaseURL: "https://rent-a-car-gom-default-rtdb.firebaseio.com",
  projectId: "rent-a-car-gom",
  storageBucket: "rent-a-car-gom.appspot.com",
  messagingSenderId: "639652553409",
  appId: "1:639652553409:web:85d6f39e54fd77b486aa40",
  measurementId: "G-3CCN3CMYRR"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase inicializado:', app);

// Inicialize o Realtime Database
const database = getDatabase(app);

export { database };