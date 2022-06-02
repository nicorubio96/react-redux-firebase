import { types } from "../types/types";
import { firebase } from "../../firebase/firebase";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
export const startLoginwithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        dispatch(login(user.uid, user.email));
        console.log(user);
        dispatch(finishLoading());

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire('asdads',errorMessage)
      });
  };
};

const provider = new firebase.auth.GoogleAuthProvider();
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
        dispatch(login(user.uid, user.displayName));
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};





export const logoutFirebase =() =>{

  return (dispatch) =>{

    firebase.auth().signOut().then(()=>{
      //Sign out
    })
    dispatch(logout())



  }




}


export const logout =() =>{
  return {
    type: types.logout
  }

}