//On click submit email, username, and password. POST route


const signUpFormHandler = async (event) => {
    event.preventDefault();
  
//TO DO: LOOK up correct location for username and password
    const usernameElement = document.querySelector("#username-login").value.trim();
    const passwordElement = document.querySelector("#password-login").value.trim();
    const emailElement = document.querySelector(/*add in element from shadin */).value.trim();
  
    if (usernameElement && passwordElement) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ usernameElement, passwordElement, emailElement }),
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
    .querySelector('.signup-form')
    .addEventListener('submit', signUpFormHandler);