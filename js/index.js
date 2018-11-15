/*var database = firebase.database();
var valor = database.ref("valor");*/
var logged=false;

function makeLogin(){
  var user=document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  /*valor.once('value').then(function(snapshot){
    console.log(snapshot.val());
  });*/
  console.log("Hello, World!");
  console.log(user);
  console.log(pass);
  if(user=="chrortegita@gmail.com" && pass=="123456789") {
    logged=true;
    console.log(logged)
    window.location.href="admin.html";
  } else if(user=="antroislife@hotmail.com" && pass=="abcdefg") {
    logged=true;
    console.log(logged)
    document.getElementById("loginForm").style.display="none";
    document.getElementById("userID").style.display="block";
  } else {
    logged=false;
  }
  /*firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: "+errorMessage);
    // ...
  });*/
}

function logout(){
  /*firebase.auth().signOut().then(function(){
    console.log("sesion cerrada correctamente");
  }, function(erro){
    console.error("Sign out error: ",error);
  });*/
  document.location.reload();
}


/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("logBut").innerHTML="Logout";
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName);
    console.log(email);
    console.log(uid);
    // ...
  } else {
    document.getElementById("logBut").innerHTML="Login";
  }
});*/

function signin(){
  var user=document.getElementById("userIn").value;
  /*var mail=document.getElementById("mailIn").value;
  var pass=document.getElementById("passIn").value;
  var sexo=document.getElementById("sexIn").value;
  var cell=document.getElementById("cellNumIn").value;
  firebase.auth().createUserWithEmailAndPassword(mail,pass).catch(function(erro) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });*/
}
