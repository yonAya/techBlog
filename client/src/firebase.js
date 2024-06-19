// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAGpUHWhyRUQqqVse2d-oRDmM99KJ70bPY',
  authDomain: 'techblog-8d3d7.firebaseapp.com',
  projectId: 'techblog-8d3d7',
  storageBucket: 'techblog-8d3d7.appspot.com',
  messagingSenderId: '356688387721',
  appId: '1:356688387721:web:22f3a8788b8c17a3ba3058',
  measurementId: 'G-2KLSW6N135',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
