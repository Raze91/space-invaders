const canvas = document.getElementById('invaders');
const context = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 540;

let timer;
let player;
let aliens;
const sounds = {
    invader1 : document.getElementById('invader1'),
    invader2 : document.getElementById('invader2'),
    invader3 : document.getElementById('invader3'),
    invader4 : document.getElementById('invader4'),
    invader_killed : document.getElementById('invader_killed'),
    shoot : document.getElementById('shoot'),
    player_death : document.getElementById('player_death'),
};

// Chargement de l'image du sprite avant de démarrer le jeu
const spritesheet = new Image();
spritesheet.src = '../img/spritesheet.png';
spritesheet.onload = function () {// Fonction exécutée lorsque le navigateur a fini de charger le PNG
    player = createPlayer();
    aliens = createAliens();
    // Démarrage de la boucle continue
    gameloop();
}

function update() {
    animatePlayer(); // Fonction qui gère l'animation du joueur
    animateAliens(); // Fonction qui gère l'animation des aliens
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);


    renderPlayer(); // Fonction qui gère le dessin du joueur
    renderAliens(); // Fonction qui gère le dessin des aliens
    renderUI(); // Fonction qui gère le dessin des éléments de l'interface
}

// Fonction gérant la boucle de jeu
function gameloop() {
    update();
    render();

    timer = window.requestAnimationFrame(gameloop);
}
