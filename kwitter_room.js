
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAgwRNQXxxHC54UzLUA0sjj7HnwHPBGjgk",
      authDomain: "kwitter-8c42e.firebaseapp.com",
      databaseURL: "https://kwitter-8c42e-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c42e",
      storageBucket: "kwitter-8c42e.appspot.com",
      messagingSenderId: "567244810581",
      appId: "1:567244810581:web:1c35027300864083e267dc"
    };
   
    firebase.initializeApp(firebaseConfig); 
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}