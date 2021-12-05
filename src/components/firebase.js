import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpadUSPsYEiTBFODCHu-0emwSdmDNzzB0",
  authDomain: "linkedin-3921c.firebaseapp.com",
  projectId: "linkedin-3921c",
  storageBucket: "linkedin-3921c.appspot.com",
  messagingSenderId: "504461434130",
  appId: "1:504461434130:web:72718d65bbf149e42ca7cb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 