const names = document.getElementById("names");
const token = document.getElementById('tokens');
const email = document.getElementById('emails');
const password=document.getElementById("passwords");
let currentUser = JSON.parse(localStorage.getItem('users'));
console.log(currentUser)

names.innerText=currentUser.name;
email.innerText =currentUser.email;
password.innerText = currentUser.password;

const logoutBtn= document.getElementById('logoutBtn')
logoutBtn.addEventListener('click' , (handleLogout ))

function handleLogout(){
    localStorage.clear();
    window.location.href="../index.html"
}

// function backButton(){
//     window.history.back()  ;
//     localStorage.clear();
// }

function generateRandomToken(length){
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let token='';
for(var i= 0 ;i< length;i++)
{
token+=characters.charAt(Math.floor(Math.random()*characters.length));
}
return token;
}

const randomToken = generateRandomToken(16);
token.innerText = randomToken;