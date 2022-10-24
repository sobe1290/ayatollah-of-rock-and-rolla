const deleteBtn = document.querySelectorAll('#deleteBtn')

const remove = async (ev) => {
    const clicked = ev.target.getAttribute('data-quiz')
    try {
        const verify = confirm('Are you sure you want to remove this quiz? All scores associated with this quiz will be destroyed. Although nerd-levels will remain unaffected')
        if (verify) {
            const response = await fetch(`/api/quiz/${clicked}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.ok) {
                alert('quiz destroyed!');
                location.reload();
            }
        }
    } catch(err) {console.log(err)}
};

deleteBtn.forEach((el) => {
    el.addEventListener('click', remove)
});