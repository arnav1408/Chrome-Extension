import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhaypXAsZ23aCOG7N9D4n2adwPfqtX92A",
    authDomain: "mutter-cards.firebaseapp.com",
    projectId: "mutter-cards",
    storageBucket: "mutter-cards.appspot.com",
    messagingSenderId: "610825274616",
    appId: "1:610825274616:web:f0f8f2b95a5dfe0da3a70d",
    measurementId: "G-YN1G3S9LLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, set, get, ref, child} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
const db = getDatabase();

const title = document.querySelector("#title");
const body = document.querySelector("#body");
const url = document.querySelector("#url_field");

const submitButton = document.querySelector("#post");

function submitData() {
    set(ref(db, "Article/" + title.value), {
        title: title.value,
        body: body.value,
        url: url.value
    }).then(() => {
        alert("Data Submitted Successfully!!!")
    }).catch((error) => {
        alert(error)
    })
}

submitButton.addEventListener('click', submitData);