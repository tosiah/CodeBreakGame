import {Component, OnInit} from '@angular/core';
import {CodeBreakService} from '../../services/code-break.service';
import {Guess} from '../../models/guess.interface';


@Component({
  selector: 'app-guessing-list',
  template: `
    <div class="guessing-list">
      <div class="guessing-list-el" *ngFor="let guess of guessingList">
        <div class="guessing-item" *ngFor="let el of guess.cipherGuessElements">
          <img src="../../../assets/symbol-{{el}}.png"
               alt="Symbol-{{el}}" id="symbol-{{el}}">
        </div>
        <div class="outcome">
          <div class="outcome-symbol-position" *ngFor="let starIcon of [].constructor(guess.symbolPositionMatches)">
            <img src="../../../assets/star-icon.png">
          </div>
          <div class="outcome-symbol" *ngFor="let searchIcon of [].constructor(guess.symbolMatches)">
            <img src="../../../assets/search-icon.jpg">
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['./guessing-list.component.css'],
})


export class GuessingListComponent implements OnInit {

  guessingListExample: Guess[] = [{
    cipherGuessElements: [1, 2, 1, 3, 3],
    symbolPositionMatches: 3,
    symbolMatches: 2
  }];

  constructor(private codeBreakService: CodeBreakService) {
  }

  ngOnInit(): void {
  }

  get guessingList() {
    console.log(this.codeBreakService.getGuessingList());
    return this.codeBreakService.getGuessingList();
  }

}
