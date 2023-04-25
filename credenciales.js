// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSlsWZnhBWvqEYjFG6W8zE09crtbp_ass",
  authDomain: "crud-react-native-31d35.firebaseapp.com",
  projectId: "crud-react-native-31d35",
  storageBucket: "crud-react-native-31d35.appspot.com",
  messagingSenderId: "392065925156",
  appId: "1:392065925156:web:15e20031cc0cfbba9298b1"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;