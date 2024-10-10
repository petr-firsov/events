import { tiles } from "./tiles";
import { moveGoblin } from "./movegoblin";
import { startGame } from "./startgame";


export function game() {
    tiles.forEach(element => element.addEventListener('click', function() {
        let goblin = document.querySelector('.goblin');
        let misses = document.querySelector('.misses');
        let wins = document.querySelector('.wins');
        if (element.firstChild === goblin) {
            wins.textContent = Number(wins.textContent) + 1;
            moveGoblin();
        } else {
            misses.textContent = Number(misses.textContent) + 1;
        }
        if (Number(misses.textContent) === 5) {
            alert('Вы проиграли!');
            misses.textContent = 0;
            wins.textContent = 0;
            goblin.remove();
            startGame();
        }
    }));
}