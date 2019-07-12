import {Component} from '@angular/core';
import {Board} from './game/board';
import {Cell} from './game/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'minesweeper';
  board: Board;
  gameOver: 'won' | 'lost' | null;

  constructor() {
    this.reset({});
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      this.gameOver = 'lost';
    } else if (result === 'win') {
      this.gameOver = 'won';
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reset({size = 20, mines = 50}) {
    this.board = new Board(size, mines);
    this.gameOver = null;
  }
}
