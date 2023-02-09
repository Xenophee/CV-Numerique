const about = document.getElementById('about');
const skills = document.getElementById('skills');
const journey = document.getElementById('journey');
const hobbies = document.getElementById('hobbies');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

// SELECTION DES HOBBIES

const hobbiesImg = document.querySelectorAll('.hobby');
const programming = document.querySelector('.programmingHobby');
const writting = document.querySelector('.writtingHobby');
const games = document.querySelector('.gamesHobby');
const textHobby = document.getElementById('textHobby');

const journeyDescription = document.querySelectorAll('.journeyDescription');
const stepJourney = document.getElementById('stepJourney');

const containerLanguages = document.querySelector('.containerLanguages');
const btnLanguages = document.querySelector('.btnLanguages');


// const scrollDisplayAnimation = (event) => {

//     allStuff.forEach(element => {

//         const {scrollTop, clientHeight} = document.documentElement;
//         const top = element.getBoundingClientRect().top;

//         if (scrollTop > (scrollTop + top) - clientHeight) {

//             if (!element.classList.contains('icones')) {
//                 element.classList.add('action');
//             } else {
//                 element.classList.add('iconesAction');
//             }
//         }
//     });
// }




// Fonction pour changer les icones de hobbies lorsqu'ils sont actif
const changeImg = (event) => {
    if (event.target == programming) {
        programming.src = './public/assets/img/programming2.png';
        writting.src = './public/assets/img/lecriture.png';
        games.src = './public/assets/img/jeu-video.png';
        textHobby.textContent = 'Passionnée par le code depuis que j’en ai découvert les bases dans le développement web, j’aime explorer de nouvelles possibilités et découvrir de nouvelles techniques en autodidacte pour améliorer mon niveau dans ce domaine. Je me lance des défis de projet personnel pendant mes heures libres.';

        programming.classList.add('active');
        writting.classList.remove('active');
        games.classList.remove('active');
    } else if (event.target == writting) {
        programming.src = './public/assets/img/programming.png';
        writting.src = './public/assets/img/lecriture2.png';
        games.src = './public/assets/img/jeu-video.png';
        textHobby.textContent = 'Après m’être consacré pas mal de temps à la lecture, j’ai eu envie de faire partie de ceux qui se trouvent derrière la plume. J’écris des fictions en prenant soin du style et en tentant de proposer des histoires originales que je partage ensuite sur internet.';

        programming.classList.remove('active');
        writting.classList.add('active');
        games.classList.remove('active');
    } else {
        programming.src = './public/assets/img/programming.png';
        writting.src = './public/assets/img/lecriture.png';
        games.src = './public/assets/img/jeu-video2.png';
        textHobby.textContent = 'J’aime jouer à des jeux vidéo de stratégie et de gestion dans mon temps libre ; cela me permet d’analyser les situations et de prendre des décisions adaptées en prenant plusieurs paramètres en compte pour atteindre des objectifs à long terme.';

        programming.classList.remove('active');
        writting.classList.remove('active');
        games.classList.add('active');
    }
}

stepChange = () => {
    console.log(stepJourney.value);

    const step0 = '2022/2023';
    const step1 = 'Depuis 2018';
    const step2 = '2016';
    const step3 = '2013';
    const step4 = '2010';

    const dateStep = document.getElementById('date');

    switch(stepJourney.value) {
        case '0' :
            dateStep.textContent = step0;
            journeyDescription[0].classList.remove('d-none');
            journeyDescription[1].classList.add('d-none');
            journeyDescription[2].classList.add('d-none');
            journeyDescription[3].classList.add('d-none');
            journeyDescription[4].classList.add('d-none');
            break;
        case '1' :
            dateStep.textContent = step1;
            journeyDescription[0].classList.add('d-none');
            journeyDescription[1].classList.remove('d-none');
            journeyDescription[2].classList.add('d-none');
            journeyDescription[3].classList.add('d-none');
            journeyDescription[4].classList.add('d-none');
            break;
        case '2' :
            dateStep.textContent = step2;
            journeyDescription[0].classList.add('d-none');
            journeyDescription[1].classList.add('d-none');
            journeyDescription[2].classList.remove('d-none');
            journeyDescription[3].classList.add('d-none');
            journeyDescription[4].classList.add('d-none');
            break;
        case '3' :
            dateStep.textContent = step3;
            journeyDescription[0].classList.add('d-none');
            journeyDescription[1].classList.add('d-none');
            journeyDescription[2].classList.add('d-none');
            journeyDescription[3].classList.remove('d-none');
            journeyDescription[4].classList.add('d-none');
            break;
        default :
            dateStep.textContent = step4;
            journeyDescription[0].classList.add('d-none');
            journeyDescription[1].classList.add('d-none');
            journeyDescription[2].classList.add('d-none');
            journeyDescription[3].classList.add('d-none');
            journeyDescription[4].classList.remove('d-none');
    }
}




// window.addEventListener('scroll', scrollDisplayAnimation);

btnLanguages.addEventListener('click', () => {
    containerLanguages.classList.toggle('active');
})

hobbiesImg.forEach(element => {
    element.addEventListener('click', changeImg);
});

stepJourney.addEventListener('input', stepChange);


