// Receive username, email, power level
const User = require('../../models/User');
 

//grabing the sign in variables from user
const userName = await User.findOne({ 
    attributes: ['']})
const userEmail = document.querySelectorAll("#user-email") //PLACEHOLDER FOR WHEN DEBORAH GIVES ME THE ID FOR THIS

//TO DO: Grab power level from user
//const powerlevel = User.


