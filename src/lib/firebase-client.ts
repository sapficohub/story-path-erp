import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK8bhhFdu84XuumbHkrvpZOa_bNn-Ttes",
  authDomain: "next-generpsolutions.firebaseapp.com",
  projectId: "next-generpsolutions",
  storageBucket: "next-generpsolutions.firebasestorage.app",
  messagingSenderId: "594376010724",
  appId: "1:594376010724:web:7cbadca2d5f834201fb5f1",
  measurementId: "G-20C77KCM4F",
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
