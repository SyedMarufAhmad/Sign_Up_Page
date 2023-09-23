const namess = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('cpassword');

document.getElementById('continue').addEventListener('click' , (e)=>{
    e.preventDefault();

    if(namess.value.trim()==='' || email.value.trim()==='' || password.value.trim()==='' || confirmpassword.value.trim()==='' )
    {
     const errorMessage = document.getElementById('error-message')
     errorMessage.innerText = 'Error: All fields are mandatory!'
    }
    else{
       const errorMessage = document.getElementById('error-message');
       errorMessage.innerText = '';

       if(password.value.trim() !== confirmpassword.value.trim()){
        alert("Password Mismatched");

       }
       else{
        saveUser(namess.value , email.value , password.value)
       }
    }
})
    function saveUser(name, email, password){
        let userObj ={
            name:name, 
            email:email, 
            password:password,

        }
        // let users= JSON.parse(localStorage.getItem('users'))

        // if(users ===null ){
        //     // users=[];
        // }
        // users.push(userObj);
        localStorage.setItem('users',JSON.stringify(userObj));
        // namess.value=''
        // email.value=''
        // password.value=''
        // confirmpassword.value=''
        window.location.href='./Profile'
    }
