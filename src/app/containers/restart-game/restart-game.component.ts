import { Component, OnInit } from '@angular/core';
import {CodeBreakService} from '../../services/code-break.service';

@Component({
  selector: 'app-restart-game',
  template: `<div class="restart-btn">
    <button (click)="restartGame()">New Game</button>
    </div>`,
  styleUrls: ['./restart-game.component.css']
})
export class RestartGameComponent implements OnInit {

  constructor(private codeBreakService: CodeBreakService) { }

  ngOnInit(): void {
    this.codeBreakService.generateRandomCipher();
  }

  restartGame() {
    this.codeBreakService.generateRandomCipher();
    this.codeBreakService.clearGuessingList();
    this.codeBreakService.initCurrentGuess();
  }

}
