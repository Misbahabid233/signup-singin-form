// var aryOfObj =[];
// var userObj;
// var signupBtn = document.getElementById("singUp")
// signupBtn && signupBtn.addEventListener("click",function(){
//     var name = document.getElementById("userN")
//     var email = document.getElementById("userE")
//     var password= document.getElementById("userP")
//     userObj = {
//     inputN : name.value,
//     inputE : email.value,
//     inputP : password.value
//     }
//     aryOfObj.push(userObj)
    
//     name.value = ""
//     email.value = ""
//     password.value = ""

//     localStorage.setItem("saveInput" , JSON.stringify(aryOfObj))
    
//     var oriData = JSON.parse(localStorage.getItem("saveInput"))
//     oriData.push(userObj)
//     console.log(oriData);
    
  
//     window.location.href = "signUp.html"
    

// } )
// var loginBtn = document.getElementById("login")

// loginBtn && loginBtn.addEventListener("click",function(){
   
    
//     var loginE = document.getElementById("registerEmail")
   
//     var loginP = document.getElementById("registerPassword")
    
//     var input = JSON.parse(localStorage.getItem("saveInput"))
    
    
    
//     for(var user of input){
//         if(user.email == loginE.value){
//             if(user.password == loginP.value){
//                 console.log("right");
                
//             }else{
//                 console.log("password wrong");
                
//             }
//         }else{
//             console.log("wrong");
            
//         }
//     }
    
// })
var aryOfObj = JSON.parse(localStorage.getItem("saveInput")) || []; // Load existing users or initialize an empty array
var userObj;

var signupBtn = document.getElementById("singUp");
signupBtn && signupBtn.addEventListener("click", function() {
    var name = document.getElementById("userN");
    var email = document.getElementById("userE");
    var password = document.getElementById("userP");

    userObj = {
        inputN: name.value,
        inputE: email.value,
        inputP: password.value
    };

    // Push new user object to the array
    aryOfObj.push(userObj);

    // Clear input fields
    name.value = "";
    email.value = "";
    password.value = "";

    // Save updated array to localStorage
    localStorage.setItem("saveInput", JSON.stringify(aryOfObj));

    // Redirect after signup
    window.location.href = "signUp.html";
});

var loginBtn = document.getElementById("login");
loginBtn && loginBtn.addEventListener("click", function() {
    var loginE = document.getElementById("registerEmail");
    var loginP = document.getElementById("registerPassword");

    var input = JSON.parse(localStorage.getItem("saveInput"));
    var userFound = false; // To track if the user is found

    for (var user of input) {
        if (user.inputE === loginE.value) { // Use inputE instead of email
            userFound = true; // User email matched
            if (user.inputP === loginP.value) { // Use inputP instead of password
                alert("Login successful"); // Notify of successful login
                break; // Exit loop on successful login
            } else {
                alert("wrong"); // Notify of wrong password
                break; // Exit loop if password is wrong
            }
        }
    }
    
    // If user not found at all
    if (!userFound) {
        alert("Email not found");
    }
});


