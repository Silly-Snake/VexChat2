const firebaseConfig = {
    apiKey: "AIzaSyCNMvZ1fGqfI2u-v_LJ7vERFNM3QhRF7Yc",
    authDomain: "vex-chat-6a8bc.firebaseapp.com",
    databaseURL: "https://vex-chat-6a8bc-default-rtdb.firebaseio.com",
    projectId: "vex-chat-6a8bc",
    storageBucket: "vex-chat-6a8bc.appspot.com",
    messagingSenderId: "9427892652",
    appId: "1:9427892652:web:df35e9296e95c7d71ea209",
    measurementId: "G-ZFD1MQEL97"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

   });});};
getData();

function logout(){
    window.location="index.html";
};

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "add room"
    });
}