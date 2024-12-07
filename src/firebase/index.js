// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Refactor it to be a FirebaseService that implement UserApi, AuthApi Interface
//       in order to use only the UserApi, AuthApi Interface and not use an specific dependencies

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

const db = getFirestore(app);

export function onSignInStateChanged(callback) {
  return onAuthStateChanged(auth, callback);
}

// TODO: add Verify Email workflow when signing up.
export async function signUpWithEmailAndPassword(fields) {
  try {
    const { name, lastName, email, password } = fields;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await updateAccountProfile({ displayName: `${name} ${lastName}` });
    await addUser(fields, userCredential.user.uid);
  } catch (e) {
    console.log('Error when signUp with email and password', e);
  }
}

export async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.log('Error when signIn with email and password', e);
  }
}

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const {
      profile: { given_name, family_name },
    } = getAdditionalUserInfo(result);
    const userToSave = {
      name: given_name,
      lastName: family_name,
      email: result.user.email,
    };

    await addUser(userToSave, result.user.uid);
  } catch (e) {
    console.log('Error when signingin with google: ', e);
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (e) {
    console.log('Error when loggin out: ', e);
  }
}

export async function updateAccountProfile(profileUpdates) {
  try {
    await updateProfile(auth.currentUser, profileUpdates);
  } catch (e) {
    console.log('Error when updating profile: ', e);
  }
}

export async function addUser(user, uid) {
  try {
    await setDoc(doc(db, 'user', uid), user);
  } catch (e) {
    console.log('Error adding the new user: ', e);
  }
}

export async function getUsers() {
  try {
    const docsSnapshot = await getDocs(collection(db, 'user'));
    const users = [];

    docsSnapshot.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
    return users;
  } catch (e) {
    console.log('Error getting Users: ', e);
  }
}
