//on click submit username and password, Post route

//const { response } = require("express");

//grabing the sign in variables from user
const userNameElement = document.querySelector("#username-login");
const userPasswordElement = document.querySelector("#password-login");


// logic to handle log in
const loginHandler = async (event) => {
    event.preventDefault();
    // console.log(userNameElement.value);
    // console.log(userPasswordElement.value);

const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
        username: userNameElement.value,
        password: userPasswordElement.value,
    }),
    headers: { 'Content-Type': 'application/json'},
})
if (response.ok) {
    //document.location.replace('/categories')
    console.log('log in good');
    document.location.replace('/account');
} else {
    alert('failed to login')
}
};


//TO DO:: reroute to categories
document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);
