import firebase from 'firebase'


const signUp = ( email, password, ) => {
    firebase
      .auth().createUserWithEmailAndPassword(email, password) 
      .then( cred => {
        console.log("this is the res: ", cred.user.uid)
      });
      // .catch((err) => {
      //   console.log(err)
      // });
  }
export default signUp;

const signIn = (email, password) => {
  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(res) {
          console.log("this is the log in res: ", res);
      })
      .catch(function(err) {
          console.log(err);
      });
};

// can't export two different consts like this
// export default {signUp, signIn};