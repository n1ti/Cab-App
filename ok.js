// Import the Firebase SDK
import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase with your project credentials
firebase.initializeApp({
  apiKey: "AIzaSyBgdKIRyMoCzvsq6cY0vTIn-u0ehIPNYJU",
  authDomain: "gedi-7553b.firebaseapp.com",
  projectId: "gedi-7553b",
});

// Access the Firestore database
const db = firebase.firestore();

// Retrieve all documents from the "drivers" collection
db.collection('drivers')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });
