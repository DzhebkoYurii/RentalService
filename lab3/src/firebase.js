import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC2K-r7c6IbZOkWcH8jDyDK7L05ewTTjWw",
    authDomain: "rental-service-labs.firebaseapp.com",
    projectId: "rental-service-labs",
    storageBucket: "rental-service-labs.appspot.com",
    messagingSenderId: "452265840962",
    appId: "1:452265840962:web:4ae4599c84ed663a8638db"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
