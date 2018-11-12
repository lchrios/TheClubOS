function login(){
  var user=document.getElementById("username").value;
  var pass=document.getElementById("password").value;
  console.log(user);
  console.log(pass);
  firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: "+errorMessage);
    // ...
  });
  checkStatus();
}

function logout(){
  firebase.auth().signOut().then(function(){
    console.log("sesion cerrada correctamente");
  }, function(erro){
    console.error("Sign out error: ",error);
  })
  checkStatus();
}

function checkStatus(){
  firebase.auth().onAuthStateChanged(function(user) {
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
  });
}

function signin(){
  var user=document.getElementById("userIn").value;
  var mail=document.getElementById("mailIn").value;
  var pass=document.getElementById("passIn").value;
  var sexo=document.getElementById("sexIn").value;
  var cell=document.getElementById("cellNumIn").value;
  firebase.auth().createUserWithEmailAndPassword(mail,pass).catch(function(erro) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  checkStatus();
}
