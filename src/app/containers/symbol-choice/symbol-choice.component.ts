import {Component, OnInit} from '@angular/core';
import {CodeBreakService} from '../../services/code-break.service';

@Component({
  selector: 'app-symbol-choice',
  template: `
    <div>
      <div class="symbol-choosing"  *ngFor="let symbol of currentGuess; let position = index">
        <img *ngIf="symbol!==-1" src="../../../assets/symbol-{{symbol}}.png"
             draggable="false"
             alt="Position-{{position}}" id="position-{{position}}" class="symbol-position" (dragover)="dragOverHandler($event)" (drop)="
           dropHandler($event, position)">
        <img *ngIf="symbol===-1" src="../../../assets/symbol-X.png"
             draggable="false"
             alt="Position-{{position}}" id="position-{{position}}" class="symbol-position" (dragover)="dragOverHandler($event)" (drop)="
           dropHandler($event, position)">
      </div>
      <div class="confirm-btn">
        <button (click)="addGuessHandler()">OK</button>
      </div>
    </div>`,
  styleUrls: ['./symbol-choice.component.css']
})
export class SymbolChoiceComponent implements OnInit {

  currentGuess: number[];

  constructor(private codeBreakService: CodeBreakService) {
    this.currentGuess = this.codeBreakService.getCurrentGuess();
  }

  ngOnInit(): void {
    this.codeBreakService.initCurrentGuess();
  }

  dragOverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
    console.log('dragOver');
  }

  dropHandler(ev, positionID) {
    ev.preventDefault();
    const symbolID = ev.dataTransfer.getData('text');
    console.log('symbolID' + symbolID);
    console.log('positionID' + positionID);
    this.codeBreakService.chooseCipherEl(symbolID, positionID);
    this.currentGuess = this.codeBreakService.getCurrentGuess();
  }

  addGuessHandler() {
    if (this.codeBreakService.getCurrentGuess().includes(-1)) {
      console.log('Complete the guess');
    } else {
      this.codeBreakService.addGuess();
    }
  }

}
