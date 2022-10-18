const btn = document.getElementById('catchMe')

let position = 0;

btn.addEventListener('mouseover', () => {
    position = position === 0 ? 150 : 0;
    btn.style.transform = `translate(${position}px)`
})