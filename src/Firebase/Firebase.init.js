import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNm4a_x8FkhbZgoZ1XQYYk5A2TV08JZ00",
  authDomain: "hotelluxstay.firebaseapp.com",
  projectId: "hotelluxstay",
  storageBucket: "hotelluxstay.appspot.com",
  messagingSenderId: "53164541927",
  appId: "1:53164541927:web:7eb5ea1217652273db5f42"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth ;