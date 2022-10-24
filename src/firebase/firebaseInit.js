import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8r_v65aC77MFBRQ2M7w4jvsaOe--olII",
  authDomain: "fireblogs-e9624.firebaseapp.com",
  projectId: "fireblogs-e9624",
  storageBucket: "fireblogs-e9624.appspot.com",
  messagingSenderId: "484552592817",
  appId: "1:484552592817:web:6bd817c4743b9d48ba8190",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
