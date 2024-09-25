var aryOfObj = [];
var userInputObj ;
var btn = document.getElementById("Login")
btn = btn.addEventListener("click" , function(){
var name = document.getElementById("userN")
var email = document.getElementById("userE")
var password= document.getElementById("userP")

userInputObj = {
    inputN : name.value,
    inputE : email.value,
    inputP : password.value
}
aryOfObj.push(userInputObj)
console.log(aryOfObj);

name.value = "";
email.value = "";
password.value = "";

localStorage.setItem("userInput" , JSON.stringify(aryOfObj))

    window.location.href = "singUp.html";
    
})
// Handle login submission

// var loginBtn = document.getElementById("logBtn")


// loginBtn.addEventListener("click",function(event){

//     event.preventDefault()
//     var loginEmail = document.getElementById("registerEmail")
//     var loginPass = document.getElementById("registerPassword")

//     console.log(loginEmail.value,loginPass.value);
    
// })

