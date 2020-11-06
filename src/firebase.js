import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_ZiRih5OBKzzQF0gDbq4OmjGkf5rrfh0",
    authDomain: "instgram-clone-react-a6109.firebaseapp.com",
    databaseURL: "https://instgram-clone-react-a6109.firebaseio.com",
    projectId: "instgram-clone-react-a6109",
    storageBucket: "instgram-clone-react-a6109.appspot.com",
    messagingSenderId: "428737612694",
    appId: "1:428737612694:web:f54858f1c281084d2fabb7",
    measurementId: "G-M5TF7QPBLL"
});

const db = firebaseApp.firestore();
const realdb = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, realdb, auth, storage};