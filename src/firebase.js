import firebase from 'firebase/app';
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbT6Pkdo2fF6M_xT4ePB5F2gVROofBshU",
    authDomain: "portfolio-24d92.firebaseapp.com",
    databaseURL: "https://portfolio-24d92.firebaseio.com",
    projectId: "portfolio-24d92",
    storageBucket: "portfolio-24d92.appspot.com",
    messagingSenderId: "490599112206",
    appId: "1:490599112206:web:cfdb1f5c938d2ee724665f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var _db = firebase.firestore();
var _storage = firebase.storage();

export default _db;
export const storage = _storage;
