import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

 const firebaseConfig = {         

    // Aca va el objeto que nos da Firebase:
  apiKey: "AIzaSyCwCylEst5saKlfVXg77xa85qTGqaBmN0g",
  authDomain: "proyecto-castellblanch.firebaseapp.com",
  projectId: "proyecto-castellblanch",
  storageBucket: "proyecto-castellblanch.appspot.com",
  messagingSenderId: "888931327360",
  appId: "1:888931327360:web:2f936077358b594e277565"

};

 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);