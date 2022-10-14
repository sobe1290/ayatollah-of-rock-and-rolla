//on click submit username and password, Post route

const { response } = require("express");

//grabing the sign in variables from user
const userName = document.querySelector(/*add in element from shadin */);
const userPassword = document.querySelector(/*add in element from shadin */);


// logic to handle log in
const loginHandler = async (event) => {
    event.preventDefault();
    const user = userName.trim();
    const password =userPassword.trim();
    
    if (!user && !password) {
        window.alert("please enter a username AND A password")
    } else {
    const response = await fetch('/api/userRoutes', {
        method: 'POST',
        body: JSON.stringify({ user, password}),
        headers: { 'Content-Type': 'application/json'}
    })};
// TO DO: find the path for location to the document.
    if (response.ok) {
        document.location.replace('/* something goes here */');
        
    }
};


//TO DO:: reroute to categories
document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);
