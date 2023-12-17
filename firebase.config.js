// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGb3EZgz0GY_zlVHrRST-OXXv1FPENjbg",
  authDomain: "practice-projects-1034.firebaseapp.com",
  projectId: "practice-projects-1034",
  storageBucket: "practice-projects-1034.appspot.com",
  messagingSenderId: "551949970242",
  appId: "1:551949970242:web:078a358f83b46aaf2ff6db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
