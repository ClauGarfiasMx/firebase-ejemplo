firebase.initializeApp(window.config);

const userEmail = document.getElementById('emailInput').value;
const userPassword = document.getElementById('passwordInput').value;

const logInBtn = document.getElementById('btnLogin');
const signUpBtn = document.getElementById('btnSignUp');
const logOutBtn = document.getElementById('btnLogOut');


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      logOutBtn.style.display = 'none';

      document.getElementById('btnLogOut').style.display ='none';
    } else {
      // No user is signed in.
    }
  });
  


const logInSession = () => {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
        alert(`${errorMessage}`);
      });
    
};

const createAccount = () => {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(`${errorCode}`);
        // ...
      })
};

logInBtn.addEventListener('click',logInSession);
signUpBtn.addEventListener('click',createAccount);