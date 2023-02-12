import { Injectable } from '@angular/core';
import { Card } from '@joeczar/poker-ui';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunityHandService {
  private communityCards: Card[] = [];
  private communityCardsSubject = new Subject<Card[]>();

  communityCards$ = this.communityCardsSubject.asObservable();

  addCard(card: Card) {
    this.communityCards.push(card);
    this.communityCardsSubject.next(this.communityCards);
  }

  clearCards() {
    this.communityCards = [];
    this.communityCardsSubject.next(this.communityCards);
  }

  getCards() {
    return this.communityCards;
  }

  getCardsSubject() {
    return this.communityCardsSubject;
  }

  getCards$() {
    return this.communityCards$;
  }

  setCards(cards: Card[]) {
    this.communityCards = cards;
    this.communityCardsSubject.next(this.communityCards);
  }
}
