import { PlayersService } from './players/players.service';
import { Injectable } from '@angular/core';
import { DealerService } from './dealer/dealer.service';
import { Card } from '@joeczar/poker-ui';
import { Observable } from 'rxjs';
import { CommunityHandService } from './community-hand/community-hand.service';

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  deck$: Observable<Card[]>;

  constructor(
    private dealerService: DealerService,
    private playersService: PlayersService,
    private communityHandService: CommunityHandService
  ) {
    this.deck$ = this.dealerService.deck$;
  }

  dealCards(numberOfCards: number) {
    return this.dealerService.dealCards(numberOfCards);
  }

  shuffleCards() {
    this.dealerService.shuffleCards();
  }

  addPlayer(playerName: string) {
    this.playersService.addPlayer(playerName);
  }

  removePlayer(playerName: string) {
    this.playersService.removePlayer(playerName);
  }

  updatePlayerHand(playerName: string, hand: Card[]) {
    this.playersService.updatePlayerHand(playerName, hand);
  }

  dealAllPlayers(numberOfCards: number) {
    const players = this.playersService.getPlayers();
    for (const player of players) {
      const cards = this.dealCards(numberOfCards);
      this.updatePlayerHand(player.name, cards);
    }
  }
}
