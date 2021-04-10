var firebaseConfig = {
  apiKey: "AIzaSyCbT6Pkdo2fF6M_xT4ePB5F2gVROofBshU",
  authDomain: "portfolio-24d92.firebaseapp.com",
  databaseURL: "https://portfolio-24d92.firebaseio.com",
  projectId: "portfolio-24d92",
  storageBucket: "portfolio-24d92.appspot.com",
  messagingSenderId: "490599112206",
  appId: "1:490599112206:web:cfdb1f5c938d2ee724665f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var _db = firebase.firestore();
var _storage = firebase.storage();

if (process.env.NODE_ENV === "production") {
  console.log("Init: Analytics");
  firebase.analytics();
}

export default _db;
export { _storage as storage };
