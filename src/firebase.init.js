// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD1AiD0hCiGpq_PEhaeN1SQ-WkF8KihT8",
  authDomain: "fir-react-auth-603a2.firebaseapp.com",
  projectId: "fir-react-auth-603a2",
  storageBucket: "fir-react-auth-603a2.appspot.com",
  messagingSenderId: "683110974727",
  appId: "1:683110974727:web:31b3973f6e488c7c8831a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;