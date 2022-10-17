// if logged, receive username and powerlevel    (power level will remain a value on the page)

const logoutBtn = document.getElementById('logoutBtn');

const logoutHandler = async () => {
    const logout = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
}

logoutBtn.addEventListener('click', logoutHandler)
