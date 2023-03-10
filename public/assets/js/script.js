


// SELECTION DES SECTIONS
const sectionSelect = document.querySelectorAll('.section');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const journey = document.getElementById('journey');
const hobbies = document.getElementById('hobbies');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');

// SELECTION SUR LES LANGAGES
const containerLanguages = document.querySelector('.containerLanguages');
const btnLanguages = document.querySelector('.btnLanguages');

const personnalityIcon = document.querySelectorAll('.personnalityIcon');

// SELECTION DES HOBBIES
const hobbiesImg = document.querySelectorAll('.hobby');
const programming = document.querySelector('.programmingHobby');
const writting = document.querySelector('.writtingHobby');
const games = document.querySelector('.gamesHobby');
const textHobby = document.getElementById('textHobby');
const titleHobby = document.querySelector('.titleHobby');

// SELECTION SUR LE PARCOURS
const journeyDescription = document.querySelectorAll('.journeyDescription');
const stepJourney = document.getElementById('stepJourney');



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

// CHANGEMENT DE L'ICONE PERSONNALITY SUR LE OVER
const changeImgIn = (event) => {

    if (event.target == personnalityIcon[0]) {
        event.target.src = './public/assets/img/personnality-icons/question2.webp';
    } else if (event.target == personnalityIcon[1]) {
        event.target.src = './public/assets/img/personnality-icons/montagne2.webp';
    } else {
        event.target.src = './public/assets/img/personnality-icons/homme-de-genie2.webp';
    }
}

// CHANGEMENT DE L'ICONE PERSONNALITY SUR LE OUT
const changeImgOut = (event) => {

    if (event.target == personnalityIcon[0]) {
        event.target.src = './public/assets/img/personnality-icons/question.webp';
    } else if (event.target == personnalityIcon[1]) {
        event.target.src = './public/assets/img/personnality-icons/montagne.webp';
    } else {
        event.target.src = './public/assets/img/personnality-icons/homme-de-genie.webp';
    }
}


// FONCTION CHANGEMENT DES ICONES HOBBIES QUAND ILS SONT ACTIFS
const changeHobby = (event) => {
    if (event.target == programming) {
        titleHobby.textContent = 'Code';
        programming.src = './public/assets/img/hobbies-icons/programming2.webp';
        writting.src = './public/assets/img/hobbies-icons/lecriture.webp';
        games.src = './public/assets/img/hobbies-icons/jeu-video.webp';
        textHobby.textContent = 'Passionn??e par le code depuis que j???en ai d??couvert les bases dans le d??veloppement web, j???aime explorer de nouvelles possibilit??s et d??couvrir de nouvelles techniques en autodidacte pour am??liorer mon niveau dans ce domaine. Je me lance des d??fis de projet personnel pendant mes heures libres.';

        programming.classList.add('active');
        writting.classList.remove('active');
        games.classList.remove('active');
    } else if (event.target == writting) {
        titleHobby.textContent = 'Ecriture';
        programming.src = './public/assets/img/hobbies-icons/programming.webp';
        writting.src = './public/assets/img/hobbies-icons/lecriture2.webp';
        games.src = './public/assets/img/hobbies-icons/jeu-video.webp';
        textHobby.textContent = 'Apr??s m?????tre consacr?? pas mal de temps ?? la lecture, j???ai eu envie de faire partie de ceux qui se trouvent derri??re la plume. J?????cris des fictions en prenant soin du style et en tentant de proposer des histoires originales que je partage ensuite sur internet.';

        programming.classList.remove('active');
        writting.classList.add('active');
        games.classList.remove('active');
    } else {
        titleHobby.textContent = 'Jeux vid??o';
        programming.src = './public/assets/img/hobbies-icons/programming.webp';
        writting.src = './public/assets/img/hobbies-icons/lecriture.webp';
        games.src = './public/assets/img/hobbies-icons/jeu-video2.webp';
        textHobby.textContent = 'J???aime jouer ?? des jeux vid??o de strat??gie et de gestion dans mon temps libre ; cela me permet d???analyser les situations et de prendre des d??cisions adapt??es en prenant plusieurs param??tres en compte pour atteindre des objectifs ?? long terme.';

        programming.classList.remove('active');
        writting.classList.remove('active');
        games.classList.add('active');
    }
}

// FONCTION QUI AFFICHE OU NON LE PARCOURS CONCERNE SELON L'ETAPE DE L'INPUT RANGE
stepChange = () => {
    console.log(stepJourney.value);

    const step0 = '2022/2023 (en cours)';
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



// DECLARATION DES EVENEMENTS
window.addEventListener('scroll', scrollDisplayAnimation);

btnLanguages.addEventListener('click', () => {
    containerLanguages.classList.toggle('active');
});

personnalityIcon.forEach(element => {
    element.addEventListener('mouseover', changeImgIn);
});

personnalityIcon.forEach(element => {
    element.addEventListener('mouseout', changeImgOut);
});

hobbiesImg.forEach(element => {
    element.addEventListener('click', changeHobby);
});

stepJourney.addEventListener('input', stepChange);

