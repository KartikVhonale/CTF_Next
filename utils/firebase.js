import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
import {questions_10} from "../data"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQoO4Jnre7Pk7azZ3JgYnslB4Id11bitw",
    authDomain: "aarhantctf.firebaseapp.com",
    projectId: "aarhantctf",
    storageBucket: "aarhantctf.appspot.com",
    messagingSenderId: "474018306563",
    appId: "1:474018306563:web:00cb8b8eefb0dd5aa3cc36",
    measurementId: "G-8ZBBXP9JD7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addDocumentToCollection = async (collectionName, userName, objectToAdd ) => {
  await setDoc(doc(db, collectionName, userName), objectToAdd)
};

export const getDocumentFromCollection = async (collectionName, docName) => {
  const docref = doc(db, collectionName, docName);
  const data = (await getDoc(docref)).data();
  return data;
};

// add questions to firebase

// questions_10.questions.forEach((question) => {
//   addDocumentToCollection("Questions", question.id.toString(), question);
// })
