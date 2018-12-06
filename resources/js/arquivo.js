var script1 = document.createElement('script');
script1.src = 'https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js';
debugger
document.body.appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'https://www.gstatic.com/firebasejs/5.5.2/firebase-auth.js';
document.body.appendChild(script2);

var invervalo = setInterval(function(){
    if (typeof firebase !== 'undefined'){
        
        firebase.initializeApp({
            apiKey: "AIzaSyAxavVp2Sn-FU74uz8pnxwFThldQZKr4N4",
            authDomain: "teste-way.firebaseapp.com",
            databaseURL: "https://teste-way.firebaseio.com",
            projectId: "teste-way",
            storageBucket: "teste-way.appspot.com",
            messagingSenderId: "768472159723"
        });
        console.log('teste');
        clearInterval(invervalo);
    }
}, 1000);