import { TestBed } from '@angular/core/testing';
import { Card } from '@joeczar/poker-ui';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a player', () => {
    service.addPlayer('Joe');
    expect(service.player$).toBeTruthy();
    let players: any;
    service.player$.subscribe((p) => (players = p));
    expect(players.length).toBe(1);
    expect(players[0].name).toBe('Joe');
  });

  it('should remove a player', () => {
    service.addPlayer('Joe');
    service.removePlayer('Joe');
    expect(service.player$).toBeTruthy();
    let players: any;
    service.player$.subscribe((p) => (players = p));
    expect(players.length).toBe(0);
  });

  it('should update a player hand', () => {
    service.addPlayer('Joe');
    service.updatePlayerHand('Joe', []);
    expect(service.player$).toBeTruthy();
    const card1: Card = { value: 'A', suit: '♠' };
    const card2: Card = { value: 'K', suit: '♠' };
    service.updatePlayerHand('Joe', [card1, card2]);
    let players: any;
    service.player$.subscribe((p) => (players = p));
    expect(players[0].hand.length).toBe(2);
    expect(players[0].hand[0]).toEqual(card1);
    expect(players[0].hand[1]).toEqual(card2);
  });
});
