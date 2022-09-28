import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu

  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");

    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => sign-in-method => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
export const signUpProvider = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();

  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

//! using data

export const db = getFirestore(app);

const usersRef = collection(db, "users");

export const useUsersListener = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return onSnapshot(usersRef, (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        })
      );
    });
  }, []);

  return users;
};

export const deleteUsers = (id) => {
  deleteDoc(doc(db, "users", id));
};

export const addUser = (sectorName, remuneration, adsExpense) => {
  const uid = auth.currentUser?.uid;
  const full = auth.currentUser.displayName; //* full means fullName
  const sector = sectorName; //* sector means sectorName
  const remune = remuneration; //* remune means remuneration
  const ads = adsExpense; //* ads means adsExpense

  if (!uid) return;

  addDoc(usersRef, {
    fullName: full,
    sectorName: sector,
    remuneration: remune,
    adsExpense: ads,
    uid: uid,
    check: false,
  });
};
