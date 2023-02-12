import { CardSuit, CardValue } from './card.types';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pg-ui-card-value',
  standalone: true,
  template: `
    <div class="value m-auto max-w-fit">{{ value }}</div>
    <div class="suite m-auto max-w-fit">{{ suit }}</div>
  `,
})
export class CardValueComponent {
  @Input() value: CardValue = 'A';
  @Input() suit: CardSuit = '♠';

  @HostBinding('class') get classes() {
    const classes = ['value-wrapper', 'max-w-fit'];
    if (this.suit === '♠' || this.suit === '♣') {
      classes.push('text-black');
    } else {
      classes.push('text-red-500');
    }
    return classes;
  }
}
