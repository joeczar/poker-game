import { Injectable } from '@angular/core';
import { Card } from '@joeczar/poker-ui';
import { BehaviorSubject } from 'rxjs';

export interface Player {
  name: string;
  hand: Card[];
}
@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private playerSubject = new BehaviorSubject<Player[]>([]);
  player$ = this.playerSubject.asObservable();

  getPlayers() {
    return this.playerSubject.getValue();
  }

  addPlayer(playerName: string) {
    const players = this.playerSubject.getValue();
    players.push({ name: playerName, hand: [] });
    this.playerSubject.next(players);
  }

  removePlayer(playerName: string) {
    const players = this.playerSubject.getValue();
    const index = players.findIndex((player) => player.name === playerName);
    players.splice(index, 1);
    this.playerSubject.next(players);
  }

  updatePlayerHand(playerName: string, hand: Card[]) {
    const players = this.playerSubject.getValue();
    const player = players.find((player) => player.name === playerName);
    if (!player) throw new Error('Player not found');
    player.hand = hand;
    this.playerSubject.next(players);
  }
}
