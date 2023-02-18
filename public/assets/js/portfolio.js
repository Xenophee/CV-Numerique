


const presentationSection = document.querySelectorAll('.presentationSection');
const gallerySection = document.querySelectorAll('.gallerySection');
const btnGallery = document.querySelectorAll('.btnGallery');
const btnLook = document.querySelectorAll('.btnLook');
const btnBack = document.querySelectorAll('.btnBack');


const showGallery = (event) => {

    if (event.target ==  btnLook[0]) {
        presentationSection[0].classList.add('d-none');
        gallerySection[0].classList.remove('d-none');
    } else {
        presentationSection[0].classList.remove('d-none');
        gallerySection[0].classList.add('d-none');
    }

    if (event.target ==  btnLook[1]) {
        presentationSection[1].classList.add('d-none');
        gallerySection[1].classList.remove('d-none');
    } else {
        presentationSection[1].classList.remove('d-none');
        gallerySection[1].classList.add('d-none');
    }

    if (event.target ==  btnLook[2]) {
        presentationSection[2].classList.add('d-none');
        gallerySection[2].classList.remove('d-none');
    } else {
        presentationSection[2].classList.remove('d-none');
        gallerySection[2].classList.add('d-none');
    }
    
    if (event.target ==  btnLook[3]) {
        presentationSection[3].classList.add('d-none');
        gallerySection[3].classList.remove('d-none');
    } else {
        presentationSection[3].classList.remove('d-none');
        gallerySection[3].classList.add('d-none');
    }
    
    if (event.target ==  btnLook[4]) {
        presentationSection[4].classList.add('d-none');
        gallerySection[4].classList.remove('d-none');
    } else {
        presentationSection[4].classList.remove('d-none');
        gallerySection[4].classList.add('d-none');
    }

    if (event.target ==  btnLook[5]) {
        presentationSection[5].classList.add('d-none');
        gallerySection[5].classList.remove('d-none');
    } else {
        presentationSection[5].classList.remove('d-none');
        gallerySection[5].classList.add('d-none');
    }
}

btnGallery.forEach(element => {
    element.addEventListener('click', showGallery)
})



const portfolioImg = document.querySelectorAll('.galleryImg');

const zoomImg = (event) => {
    console.log(event.target);
    event.target.classList.toggle('zoom');
    event.target.classList.toggle('transform');
}

portfolioImg.forEach(element => {
    element.addEventListener('click', zoomImg)
})