//On click submit email, username, and password. POST route


const signUpFormHandler = async (event) => {
    event.preventDefault();
    console.log("hello");
    const usernameElement = document.querySelector("#username-login").value.trim();
    const passwordElement = document.querySelector("#password-login").value.trim();
    const checkpasswordElement = document.querySelector("#password-login-check").value.trim();
    const emailElement = document.querySelector("#email-login").value.trim();
    //debugg
    console.log(usernameElement, passwordElement, checkpasswordElement);
    if(checkpasswordElement !== passwordElement) {
      alert('passwords do not match')
      return;
    }
    
    if (usernameElement && passwordElement) {
      const response = await fetch('/api/users/createuser', {
        method: 'POST',
        body: JSON.stringify({ usernameElement, passwordElement, emailElement}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
          // then route page to categories
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('#signupSubmit')
    .addEventListener('click', signUpFormHandler);