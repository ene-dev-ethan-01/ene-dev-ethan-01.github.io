// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBzFt1CM18cZO",
  authDomain: "firebaseappaitest-ea9c8.firebaseapp.com",
  projectId: "aitest-ea9c8",
  storageBucket: "aitest-ea9c8.firebasestorage.app",
  messagingSenderId: "521079460855",
  appId: "1:521079460855:web:2e15f662d081e58cd814f2"
});

const messaging = firebase.messaging();
