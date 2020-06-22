import {Injectable} from '@angular/core';
import {Guess} from '../models/guess.interface';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakService {
  private cipher: number[] = [];
  private guessingList: Guess[] = [];
  private currentGuess: number[] = new Array(5).fill(-1);

  constructor() {
  }

  generateRandomCipher() {
    this.cipher = Array.from({length: 5}, x => Math.floor(Math.random() * 5));
    console.log(this.cipher);
  }

  clearGuessingList() {
    this.guessingList = [];
  }

  getGuessingList(): Guess[] {
    return this.guessingList;
  }

  getCurrentGuess(): number[] {
    return this.currentGuess;
  }

  addGuess(): void {
    const outcome = this.countOutcome();
    this.guessingList = [ ... this.guessingList, {
      cipherGuessElements: [... this.currentGuess],
      symbolPositionMatches: outcome.symbolPositionMatches,
      symbolMatches: outcome.symbolMatches
    }];
    this.initCurrentGuess();
  }

  initCurrentGuess(): void {
    /*this.currentGuess = */
    this.currentGuess.map((el) => -1);
    console.log(this.currentGuess);
  }

  chooseCipherEl(symbol: number, position: number) {
    this.currentGuess[position] = symbol;
    console.log(this.currentGuess);
  }

  countOutcome() {
    let notGuessedCipherElements = [];
    let wrongChosenCipherElements = [];

    const currentSymbolPositionMatches = this.currentGuess.filter((el, index) => {
        if (el !== this.cipher[index]) {
          notGuessedCipherElements = [...notGuessedCipherElements, this.cipher[index]];
          wrongChosenCipherElements = [...wrongChosenCipherElements, this.currentGuess[index]];
        }
        return el === this.cipher[index];
      }).length;

    const currentSymbolMatches = wrongChosenCipherElements.filter((el) => {
        let correctSymbols = false;
        if (notGuessedCipherElements.includes(el)) {
          correctSymbols = true;
          notGuessedCipherElements = notGuessedCipherElements.filter((notGuessedEl) => !notGuessedCipherElements.indexOf(el));
        }
        return correctSymbols;
      }).length;
    return {symbolPositionMatches: currentSymbolPositionMatches, symbolMatches: currentSymbolMatches};
  }

}


