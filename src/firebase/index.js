// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBayOjumECapzPtKWN6yxjlJL4kR5LdX0k',
  authDomain: 'pololis-cakes.firebaseapp.com',
  projectId: 'pololis-cakes',
  storageBucket: 'pololis-cakes.firebasestorage.app',
  messagingSenderId: '614989738848',
  appId: '1:614989738848:web:02fc8c6d0f0f8cd9c3e405',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export async function signUpWithEmailAndPassword(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  return userCredential.user;
}
