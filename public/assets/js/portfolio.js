

const sectionSelect = document.querySelectorAll('section');
const presentationSection = document.querySelectorAll('.presentationSection');
const gallerySection = document.querySelectorAll('.gallerySection');
const btnGallery = document.querySelectorAll('.btnGallery');
const btnLook = document.querySelectorAll('.btnLook');
const btnBack = document.querySelectorAll('.btnBack');
const portfolioImg = document.querySelectorAll('.galleryImg');


// FONCTION D'ANIMATION DES SECTIONS AU SCROLL AU PREMIER CHARGEMENT DE LA PAGE
const scrollDisplayAnimation = (event) => {

    sectionSelect.forEach(element => {

        const {scrollTop, clientHeight} = document.documentElement;
        const top = element.getBoundingClientRect().top;

        if (scrollTop > (scrollTop + top) - clientHeight) {

            element.classList.add('action');
        }
    });
}


// FONCTION POUR MONTRER / CACHER LA GALERIE
const showGallery = (event) => {

    if (event.target ==  btnLook[0]) {
        presentationSection[1].classList.add('d-none');
        gallerySection[0].classList.remove('d-none');
    } else {
        presentationSection[1].classList.remove('d-none');
        gallerySection[0].classList.add('d-none');
    }

    if (event.target ==  btnLook[1]) {
        presentationSection[2].classList.add('d-none');
        gallerySection[1].classList.remove('d-none');
    } else {
        presentationSection[2].classList.remove('d-none');
        gallerySection[1].classList.add('d-none');
    }

    if (event.target ==  btnLook[2]) {
        presentationSection[3].classList.add('d-none');
        gallerySection[2].classList.remove('d-none');
    } else {
        presentationSection[3].classList.remove('d-none');
        gallerySection[2].classList.add('d-none');
    }
    
    if (event.target ==  btnLook[3]) {
        presentationSection[4].classList.add('d-none');
        gallerySection[3].classList.remove('d-none');
    } else {
        presentationSection[4].classList.remove('d-none');
        gallerySection[3].classList.add('d-none');
    }
    
    if (event.target ==  btnLook[4]) {
        presentationSection[5].classList.add('d-none');
        gallerySection[4].classList.remove('d-none');
    } else {
        presentationSection[5].classList.remove('d-none');
        gallerySection[4].classList.add('d-none');
    }

    if (event.target ==  btnLook[5]) {
        presentationSection[6].classList.add('d-none');
        gallerySection[5].classList.remove('d-none');
    } else {
        presentationSection[6].classList.remove('d-none');
        gallerySection[5].classList.add('d-none');
    }
}


// FONCTION POUR ZOOMER LES IMAGES DE LA GALERIE
const zoomImg = (event) => {
    console.log(event.target);
    event.target.classList.toggle('zoom');
    event.target.classList.toggle('transform');
}


// DECLARATION DES EVENEMENTS
window.addEventListener('scroll', scrollDisplayAnimation);

portfolioImg.forEach(element => {
    element.addEventListener('click', zoomImg)
})

btnGallery.forEach(element => {
    element.addEventListener('click', showGallery)
})




