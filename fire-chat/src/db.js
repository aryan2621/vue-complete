import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAkGPGpL5xnbJ6_zGrNxzQAcHtSrWoV-04",
  authDomain: "chat-vue-js-bf2f5.firebaseapp.com",
  projectId: "chat-vue-js-bf2f5",
  storageBucket: "chat-vue-js-bf2f5.appspot.com",
  messagingSenderId: "380129963384",
  appId: "1:380129963384:web:20af4aedc8cf2a46fbac8d",
};
const db = firebase.initializeApp(config);
export default db;
