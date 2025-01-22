const firebaseConfig = {
  apiKey: "AIzaSyDYzXXnfgxjBVEednaHeMLm7aY8lhZT6aQ",
  authDomain: "sign-up-firebase-3d69e.firebaseapp.com",
  databaseURL: "https://sign-up-firebase-3d69e-default-rtdb.firebaseio.com",
  projectId: "sign-up-firebase-3d69e",
  storageBucket: "sign-up-firebase-3d69e.firebasestorage.app",
  messagingSenderId: "873805905370",
  appId: "1:873805905370:web:e8ff6e09f2edad952054e3"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export {auth , database}