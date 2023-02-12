import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFacing, CardSuit, CardValue } from './card.types';
import { CardValueComponent } from './card-value.component';
import { CardImageComponent } from './card-image.component';

@Component({
  selector: 'pg-ui-card',
  standalone: true,
  template: ` <div *ngIf="isUp" class="card-front flex h-full">
      <pg-ui-card-value [value]="value" [suit]="suit"></pg-ui-card-value>
      <pg-ui-card-image
        class="flex-grow"
        [value]="value"
        [suit]="suit"
      ></pg-ui-card-image>
      <pg-ui-card-value
        class="mirror-flipped"
        [value]="value"
        [suit]="suit"
      ></pg-ui-card-value>
    </div>
    <div *ngIf="!isUp" class="card-back"><div class="pattern"></div></div>`,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardValueComponent, CardImageComponent],
})
export class CardComponent {
  @Input() facing!: CardFacing;
  @Input() value!: CardValue;
  @Input() suit!: CardSuit;

  get isUp() {
    return this.facing === 'up';
  }
}
