firebase.initializeApp({
    apiKey: "AIzaSyAxavVp2Sn-FU74uz8pnxwFThldQZKr4N4",
    authDomain: "teste-way.firebaseapp.com",
    databaseURL: "https://teste-way.firebaseio.com",
    projectId: "teste-way",
    storageBucket: "teste-way.appspot.com",
    messagingSenderId: "768472159723"
});

firebase.firestore().settings({ 
    timestampsInSnapshots: true 
});

window.fbFirestore = firebase.firestore();
window.fbStorage = firebase.storage();
window.fbAuth = firebase.auth();