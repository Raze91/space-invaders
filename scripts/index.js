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

const MODE_PLAYING = 1;
const MODE_GAME_OVER = 2;
const MODE_PLAYER_DEAD = 3;
let game_mode = MODE_PLAYING;

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

    switch(game_mode) {
        case MODE_PLAYING:
        animatePlayer(); // Fonction qui gère l'animation du joueur
        animateAliens(); // Fonction qui gère l'animation des aliens
    }    
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);


    switch(game_mode) {
    case MODE_PLAYING: 
    case MODE_PLAYER_DEAD: 
        renderPlayer(); // Fonction qui gère le dessin du joueur
        renderAliens(); // Fonction qui gère le dessin des aliens
        break;
    case MODE_GAME_OVER:
        renderGameOver(); // Affichage du "game over" à l'écran
        break;
    }
    renderUI(); // Fonction qui gère le dessin des éléments de l'interface

}

// Fonction gérant la boucle de jeu
function gameloop() {
    update();
    render();

    timer = window.requestAnimationFrame(gameloop);


    
}

function renderGameOver() {
    context.fillStyle = '#0D84FA'
    context.font = 'normal 30px "Press Start 2P", cursive';
    context.textAlign = 'center'
    context.fillText('GAME OVER', canvas.width / 2, canvas.height/2);

    context.fillStyle = '#FFFFFF'
    context.font = 'normal 15px "Press Start 2P", cursive';
    context.fillText('PRESS F5', canvas.width/2, canvas.height/2 + 50);
}