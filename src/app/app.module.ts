import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SymbolChoiceComponent } from './containers/symbol-choice/symbol-choice.component';
import {GuessingListComponent} from './containers/guessing-list/guessing-list.component';
import { SymbolPanelComponent } from './components/symbol-panel/symbol-panel.component';
import { RestartGameComponent } from './containers/restart-game/restart-game.component';
import {CommonModule} from '@angular/common';
import {CodeBreakService} from './services/code-break.service';

@NgModule({
  declarations: [
    AppComponent,
    SymbolChoiceComponent,
    GuessingListComponent,
    SymbolPanelComponent,
    RestartGameComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    CodeBreakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
