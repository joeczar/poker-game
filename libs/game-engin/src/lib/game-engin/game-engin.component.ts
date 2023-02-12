import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiComponent,
  CardComponent,
  cardValueMap,
  CardSuit,
  CardValue,
  Card,
} from '@joeczar/poker-ui';

@Component({
  selector: 'poker-game-game-engine',
  standalone: true,
  imports: [CommonModule, UiComponent, CardComponent],
  template: `
    <p class="bg-slate-500">game-engin works!</p>
    <div class="flex flex-row-reverse flex-wrap justify-end">
      <pg-ui-card facing="down"></pg-ui-card>
      <pg-ui-card
        *ngFor="let card of cards"
        [value]="card.value"
        [suit]="card.suit"
        facing="up"
      ></pg-ui-card>
    </div>
  `,
  styles: [],
})
export class GameEnginComponent {
  cardValueMap = cardValueMap;
  suitsArray: CardSuit[] = ['♠', '♣', '♥', '♦'];

  cards = this.generateCards();

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
}
