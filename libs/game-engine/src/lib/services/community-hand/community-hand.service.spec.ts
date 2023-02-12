import { TestBed } from '@angular/core/testing';
import { CommunityHandService } from './community-hand.service';
import { Card } from '@joeczar/poker-ui';

describe('CommunityHandService', () => {
  let service: CommunityHandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityHandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a card', () => {
    const card: Card = { suit: '♣', value: 'A' };
    service.addCard(card);
    const cards = service.getCards();
    console.log('cards', cards);
    expect(service.getCards()).toEqual([card]);
  });

  it('should clear the cards', () => {
    const card1: Card = { suit: '♠', value: 'A' };
    const card2: Card = { suit: '♥', value: '2' };
    service.addCard(card1);
    service.addCard(card2);
    service.clearCards();
    expect(service.getCards()).toEqual([]);
  });

  it('should set the cards', () => {
    const card1: Card = { suit: '♥', value: 'A' };
    const card2: Card = { suit: '♣', value: '2' };
    const cards = [card1, card2];
    service.setCards(cards);
    expect(service.getCards()).toEqual(cards);
  });

  it('should return the community cards', () => {
    const card1: Card = { suit: '♥', value: 'A' };
    const card2: Card = { suit: '♣', value: '2' };
    const cards = [card1, card2];
    service.setCards(cards);
    expect(service.getCards()).toEqual(cards);
  });

  it('should return the community cards subject', () => {
    expect(service.getCardsSubject()).toBeTruthy();
  });

  it('should return the community cards observable', () => {
    expect(service.getCards$()).toBeTruthy();
  });
});
