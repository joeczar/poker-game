import { Injectable } from '@angular/core';
import { Card, CardSuit, CardValue, cardValueMap } from '@joeczar/poker-ui';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  cardValueMap = cardValueMap;
  suitsArray: CardSuit[] = ['♠', '♣', '♥', '♦'];
  deckSubject = new BehaviorSubject<Card[]>([]);
  deck$ = this.deckSubject.asObservable();


  constructor() {
    this.deckSubject.next(this.generateCards());
   }

   generateCards(): Card[] {
    const cards = [];
    for (const value in cardValueMap) {
      for (const suit of this.suitsArray) {
        const castValue = value as CardValue;
        const castSuit = suit as CardSuit;
        cards.push({ value: castValue, suit: castSuit });
      }
    }
    return cards;
  }

  shuffleDeck() {
    const deck = this.deckSubject.getValue();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    this.deckSubject.next(deck);
  }
}
