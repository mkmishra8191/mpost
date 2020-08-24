
  function signUp(){
        
        var email = document.getElementById("txtEmail");
        var password = document.getElementById("txtPassword");
        
        return new Promise((resolve, reject) => {
 firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  
  
  
    successMessage.innerHTML="";
    errorMessage.innerHTML="";

    onNavigate('/');
    subscribePost();

  
},
err => {
  console.log(err);
  errorMessage.innerHTML = err.message;
  successMessage.innerHTML="";

})

    }
    
    
    
    function signIn(){
        
        var email = document.getElementById("txtEmail");
        var password = document.getElementById("txtPassword");
        
        return new Promise((resolve, reject) => {
 firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  
  
  
    successMessage.innerHTML="";
    errorMessage.innerHTML="";
    onNavigate('/');
    subscribePost();

  
},
err => {
  console.log(err);
  errorMessage.innerHTML = err.message;
  successMessage.innerHTML="";

})

        
        
        
        
    }
    

    function resetPassword(resolve,reject){
        var email = document.getElementById("txtREmail");
        
        return new Promise((resolve, reject) => {
 firebase.auth().sendPasswordResetEmail(email.value)
  .then(res => {
    resolve(res);
  }, err => reject(err));


}).then(res => {
  
  
  
    successMessageR.innerHTML="Link has been sent to your email address.";
    errorMessageR.innerHTML="";


  
},
err => {
  console.log(err);
  errorMessageR.innerHTML = err.message;
  successMessageR.innerHTML="";

})

        
}
          
    
    
    
    function signOut(){
        
        auth.signOut();
        onNavigate('/');
        subscribePost();
        
        
    }
    
    
    
    auth.onAuthStateChanged(function(user){
        
        if(user){
            
           
            document.getElementById("btnLogout").removeAttribute("hidden")
            document.getElementById("btna").removeAttribute("hidden")
            document.getElementById("btnp").removeAttribute("hidden")
          

            //Take user to a different or home page
            var x = document.getElementById("btnlogin")

            var y =document.createAttribute("hidden");

            y.value= false;


             x.setAttributeNode(y);
             
            
             
             subscribemyPost();
              
            
           // is signed in
            
            
            
        }else{
            document.getElementById("btna").setAttribute("hidden",true)
            document.getElementById("btnlogin").removeAttribute("hidden")
            document.getElementById("btnp").setAttribute("hidden",true)
            document.getElementById("btnLogout").setAttribute("hidden",true)

            
            

            
            
            
            //no user is signed in
          
        }
        
        
        
    });