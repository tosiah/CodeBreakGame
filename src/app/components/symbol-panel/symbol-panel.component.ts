import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-symbol-panel',
  template: `
    <div class="symbol-panel" *ngFor="let symbol of symbols">
      <img src="../../../assets/symbol-{{symbol}}.png" draggable="true"
           alt="Symbol-{{symbol}}" id="symbol-{{symbol}}" class="symbol" (dragstart)="dragStartHandler($event, symbol)">
    </div>`,
  styleUrls: ['./symbol-panel.component.css']
})
export class SymbolPanelComponent {

  symbols: number[] = [0, 1, 2, 3, 4];

  dragStartHandler(ev, symbolID) {
    console.log('symbolIdFromDragStart ' + symbolID);
    ev.dataTransfer.setData('text/plain', symbolID);
    console.log('dragStart');
  }


}
