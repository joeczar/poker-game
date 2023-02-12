import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent, CardComponent, PlayerComponent } from '@joeczar/poker-ui';
import { GameEngineService } from '../services/game-engine.service';

@Component({
  selector: 'poker-game-game-engine',
  standalone: true,
  imports: [CommonModule, UiComponent, CardComponent, PlayerComponent],
  template: `
    <p class="bg-slate-500">game-engin works!</p>
    <div class="flex flex-row-reverse flex-wrap justify-end">
      <!-- <pg-ui-card facing="down"></pg-ui-card>
      <pg-ui-card
        *ngFor="let card of gameEngineService.deck$ | async"
        [value]="card.value"
        [suit]="card.suit"
        facing="up"
        (click)="gameEngineService.shuffleCards()"
      ></pg-ui-card> -->

      <pg-ui-player></pg-ui-player>
    </div>
  `,
  styles: [],
})
export class GameEngineComponent {
  constructor(protected gameEngineService: GameEngineService) {
    // this.gameEngineService.deck$.subscribe((deck) => {
    //   console.log(deck);
    // });
  }
}
