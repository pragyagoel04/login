//loads sign up page in a new tab
function joinSignUpPage(){
  window.location="signUpPage.html";
}

function homePage(){
  window.location="index.html";
}

// Name and Password from the register-form
var usernameid = document.getElementById('usernameid');
var passwordid = document.getElementById('passwordid');

// storing input from register-form
function store(){
  localStorage.setItem('usernameid',usernameid.value);
  localStorage.setItem('passwordid',passwordid.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('usernameid');
    var storedPw = localStorage.getItem('passwordid');

    // entered data from the login-form
    var unameid = document.getElementById('unameid');
    var pwdid = document.getElementById('pwdid');

    // check if stored data from register-form is equal to data from login form
    if(unameid.value == storedName && pwdid.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('Error');
    }
}