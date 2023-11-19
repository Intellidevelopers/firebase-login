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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;
        const userRef = firebase.database().ref('users/' + userId);

        userRef.once('value').then((snapshot) => {
            const userData = snapshot.val();
            const usernameDisplay = document.getElementById('usernameDisplay');
            const userIdDisplay = document.getElementById('userIdDisplay');

            usernameDisplay.textContent = userData.username;
            userIdDisplay.textContent = userId;
        });
    } else {
        // User not logged in,
        // ... (previous part of the code)

        // User not logged in, redirect to login page
        window.location.href = 'login.html';
    }
});
