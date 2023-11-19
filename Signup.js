

  const firebaseConfig = {
    // Your Firebase config
    apiKey: "AIzaSyC1kDtYIauw1KYF2OYK6zJBj_DtDxjuOWo",
    authDomain: "login-signup-authenticat-4fa75.firebaseapp.com",
    databaseURL: "https://login-signup-authenticat-4fa75-default-rtdb.firebaseio.com",
    projectId: "login-signup-authenticat-4fa75",
    storageBucket: "login-signup-authenticat-4fa75.appspot.com",
    messagingSenderId: "77434343036",
    appId: "1:77434343036:web:de2288d9664bae1c7483f9",
  };

firebase.initializeApp(firebaseConfig);

function signup() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const userId = userCredential.user.uid;

      const userRef = firebase.database().ref('users/' + userId);
      userRef.set({
        username: username,
        email: email,
      });

      // Replace alert with SweetAlert for success
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User registered successfully!',
      }).then(() => {
        window.location.href = 'homepage.html';
      });
    })
    .catch((error) => {
      const errorMessage = error.message;

      // Replace alert with SweetAlert for error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
      });
    });
}
