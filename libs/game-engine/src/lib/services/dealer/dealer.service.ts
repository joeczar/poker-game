import { Injectable } from '@angular/core';
import { Card } from '@joeczar/poker-ui';
import { Observable } from 'rxjs';
import { DeckService } from '../deck/deck.service';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  deck$: Observable<Card[]>;

  constructor(private deckService: DeckService) {
    this.deck$ = this.deckService.deck$;
  }

  dealCards(numberOfCards: number) {
    const deck = this.deckService.deckSubject.getValue();
    const cards = deck.splice(0, numberOfCards);
    this.deckService.deckSubject.next(deck);
    return cards;
  }

  shuffleCards() {
    this.deckService.shuffleDeck();
  }
}
