import { TestBed } from '@angular/core/testing';

import { DeckService } from '../deck/deck.service';

import { of } from 'rxjs';
import { cardValueMap } from '@joeczar/poker-ui';
describe('DeckService', () => {
  let service: DeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should generate a deck of 52 cards', () => {
    expect(service.generateCards().length).toBe(52);
  });

  it('should have all cards with the correct values and suits', () => {
    const deck = service.deckSubject.getValue();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [value, valueLabel] of Object.entries(cardValueMap)) {
      for (const suit of service.suitsArray) {
        const card = deck.find(
          (card) => card.value === value && card.suit === suit
        );
        expect(card).toBeTruthy();
      }
    }
  });
  it('should shuffle the deck 1', () => {
    const originalDeck = service.generateCards();
    service.shuffleDeck();
    const shuffledDeck = service.deckSubject.getValue();
    expect(originalDeck).not.toEqual(service.deckSubject.getValue());
  });
  it('should shuffle the deck 2', () => {
    const deck = [...service.deckSubject.getValue()];
    const spy = jest.spyOn(service, 'shuffleDeck');
    service.shuffleDeck();
    expect(spy).toHaveBeenCalled();
    expect(deck).not.toEqual(service.deckSubject.getValue());
  });
  it('should shuffle the deck', () => {
    const deck = service.generateCards();
    service.shuffleDeck();
    expect(deck).not.toEqual(service.deckSubject.getValue());
    service.shuffleDeck();
    expect(deck).not.toEqual(service.deckSubject.getValue());
  });

  it('should call shuffleDeck', () => {
    const spy = jest.spyOn(service, 'shuffleDeck');
    service.shuffleDeck();
    expect(spy).toHaveBeenCalled();
  });
  it('should have an observable deck', () => {
    const deck = service.generateCards();
    jest.spyOn(service.deckSubject, 'asObservable').mockReturnValue(of(deck));

    service.deck$.subscribe((result) => {
      expect(result).toEqual(deck);
    });
  });
});
