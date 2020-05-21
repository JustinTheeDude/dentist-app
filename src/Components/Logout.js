import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

const auth = firebase.auth();

export default () => {
  auth.signOut()
    .then( ()=> {
      console.log('user signed out')
    })


  return  (
      <Redirect to="/" />
    
  )
}



