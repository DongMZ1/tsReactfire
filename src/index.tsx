import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "firebase/firestore";
import 'firebase/app';
import 'firebase/auth';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';


const firebaseConfig = {
  apiKey: "AIzaSyAFeVyH8AQAFaoUlxJNAy_YkvnPEiVtpWY",
  authDomain: "reactfire-96e09.firebaseapp.com",
  projectId: "reactfire-96e09",
  storageBucket: "reactfire-96e09.appspot.com",
  messagingSenderId: "970720626661",
  appId: "1:970720626661:web:e1c2aeb101d1471e34510c",
  measurementId: "G-B63Z47J1QR"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
