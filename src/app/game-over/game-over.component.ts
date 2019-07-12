import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {

  @Input() state: 'won' | 'lost';

  @HostBinding('style.background-image') backgroundImage = 'radial-gradient(#ff4081, white)';

  constructor() {
  }

  ngOnInit() {
    if (this.state === 'lost') {
      this.backgroundImage = 'radial-gradient(#f44336, white)';
    }
  }

}
