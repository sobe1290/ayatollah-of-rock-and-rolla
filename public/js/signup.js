//On click submit email, username, and password. POST route


const signUpFormHandler = async (event) => {
    event.preventDefault();
  
//TO DO: LOOK up correct location for username and password
    const username = document.querySelector(/*add in element from shadin */).value.trim();
    const password = document.querySelector(/*add in element from shadin */).value.trim();
    const email = document.querySelector(/*add in element from shadin */).value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
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