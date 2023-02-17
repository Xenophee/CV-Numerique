const portfolioImg = document.querySelectorAll('.portfolioImg');
const zoomImg = (event) => {
    console.log(event.target);
    event.target.classList.toggle('zoom');
    event.target.classList.toggle('transform');
}

portfolioImg.forEach(element => {
    element.addEventListener('click', zoomImg)
})