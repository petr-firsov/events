import { tiles } from './tiles';
import image from './images/goblin.png';

export function moveGoblin() {
    let goblin = document.querySelector('.goblin');
    let goblinParent = goblin.parentElement;
    let currentTile = tiles.indexOf(goblinParent);
    let nextTile = (Math.ceil(Math.random() * 15));
    while (nextTile === currentTile) {
        nextTile = (Math.ceil(Math.random() * 15));
    }
    goblin.remove();
    tiles[nextTile].insertAdjacentHTML('beforeend', `<img src="${image}" width=90 height=90 class="goblin">`);
}