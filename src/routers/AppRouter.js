import React, { useEffect } from 'react'
import { Routes, Route} from "react-router-dom";
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebase'
import { useDispatch } from 'react-redux';
import {login} from '../store/actions/auth'
import { useState } from 'react';
 import {JournalScreen} from '../components/journal/JournalScreen'
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setloading, setNotes } from '../store/actions/notes';
 


export const AppRouter = () => {
 
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(setloading(user.uid))              
      } else {
        setIsLoggedIn(false);
      }
  
      setChecking(false);
    });
  }, [dispatch, setIsLoggedIn]);
  
  if (checking) {
    return <h1>holaaa</h1>;
  }
 
    // link entrada y proteccion de direcciones 
    return (
        <Routes>
        <Route
            path="/*"
            element={
                <PublicRoute isAuth={isLoggedIn}>
                    <AuthRouter />
                </PublicRoute>
            }
        />
 
        <Route
            path="/"
            element={
                <PrivateRoute isAuth={isLoggedIn}>
                    <JournalScreen/>
                    
                </PrivateRoute>
            }
        />
        
 
    </Routes>
    
   
    )
}