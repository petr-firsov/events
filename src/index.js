import './index.css';
import { startGame } from './startgame';
import { moveGoblin } from './movegoblin';
import { game } from './game';

startGame();
setInterval(moveGoblin, 1000);
game();