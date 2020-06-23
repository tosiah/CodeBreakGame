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
    this.guessingList = [{
      cipherGuessElements: [...this.currentGuess],
      symbolPositionMatches: outcome.symbolPositionMatches,
      symbolMatches: outcome.symbolMatches
    }, ...this.guessingList];
    console.log(this.guessingList);
    this.initCurrentGuess();
  }

  initCurrentGuess(): void {
    this.currentGuess = this.currentGuess.map((el) => -1);
    console.log(this.currentGuess);
  }

  chooseCipherEl(symbol: number, position: number) {
    this.currentGuess[position] = symbol;
    console.log(this.currentGuess);
  }

  countOutcome() {
    let notGuessedCipherElements: number[] = [];
    let wrongChosenCipherElements: number[] = [];

    const currentSymbolPositionMatches = this.currentGuess.filter((el, index) => {
      if (el !== this.cipher[index]) {
        notGuessedCipherElements = [...notGuessedCipherElements, this.cipher[index]];
        wrongChosenCipherElements = [...wrongChosenCipherElements, this.currentGuess[index]];
      }
      console.log(notGuessedCipherElements);
      console.log(wrongChosenCipherElements);
      return el === this.cipher[index];
    }).length;

    const currentSymbolMatches = wrongChosenCipherElements.filter((el) => {
      let correctSymbols = false;
      if (notGuessedCipherElements.includes(el)) {
        correctSymbols = true;
        let deleted = false;
        notGuessedCipherElements = notGuessedCipherElements.reduce((result, notGuessedEl) => {
          if (notGuessedEl === el && deleted === false) {
            deleted = true;
            notGuessedEl = -1;
          }
          console.log(notGuessedEl);
          return result = [...result, notGuessedEl];
        }, []);
        console.log(notGuessedCipherElements);
      }
      return correctSymbols;
    }).length;
    /*wrongChosenCipherElements.filter((el) => {
      let correctSymbols = false;
      if (notGuessedCipherElements.includes(el)) {
        correctSymbols = true;
        notGuessedCipherElements = notGuessedCipherElements.filter((notGuessedEl) => {
          console.log(notGuessedEl);
          return notGuessedEl !== notGuessedCipherElements.indexOf(el);
        });
        console.log(notGuessedCipherElements);
      }
      return correctSymbols;
    }).length;*/
    return {symbolPositionMatches: currentSymbolPositionMatches, symbolMatches: currentSymbolMatches};
  }

}


