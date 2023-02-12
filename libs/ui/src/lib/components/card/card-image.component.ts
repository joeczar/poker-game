import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { CardSuit, CardValue } from './card.types';

@Component({
  selector: 'pg-ui-card-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="array1" class="arr1 flex flex-col h-full justify-evenly">
      <ng-container *ngFor="let item of array1">
        <div *ngIf="cardService?.isFaceCard">
          {{ value }}
        </div>
        <div *ngIf="!isArray(item)">
          {{ item }}
        </div>
      </ng-container>
    </div>
    <ng-container *ngIf="array2 && array2.length > 0">
      <div *ngIf="array2" class="arr2 flex flex-col h-full justify-evenly">
        <ng-container *ngFor="let item of array2">
          <div *ngIf="!isArray(item)">
            {{ item }}
          </div>
        </ng-container>
      </div>
    </ng-container>
    <ng-container *ngIf="array3 && array3.length > 0">
      <div class="arr3 flex flex-col h-full justify-evenly">
        <ng-container *ngFor="let item of array3">
          <div *ngIf="!isArray(item)">
            {{ item }}
          </div>
        </ng-container>
      </div>
    </ng-container>
  `,
})
export class CardImageComponent implements OnInit {
  @Input() value!: CardValue;
  @Input() suit!: CardSuit;
  @HostBinding('class') get classes() {
    const classes = [
      'card-image',
      'flex',
      'justify-around',
      'items-center',
      'text-[2.5rem]',
      'gap-4',
      this.suit === '♠' || this.suit === '♣' ? 'text-black' : 'text-red-500',
    ];
    return classes;
  }
  cardService?: CardService;

  get iconArray(): CardSuit[] | CardSuit[][] {
    if (!this.cardService) return [];
    return this.cardService?.generateCardValuesArray();
  }
  get faceOrSingle(): boolean {
    if (!this.cardService) return false;
    return this.cardService.isFaceCard || this.cardService.numberValue < 4;
  }

  get array1(): CardSuit[] {
    if (!this.iconArray) return [];
    const array = this.iconArray;

    if (Array.isArray(array[0])) {
      return array[0];
    }
    return array as CardSuit[];
  }

  get array2(): CardSuit[] | null {
    if (!this.iconArray || this.cardService?.isFaceCard) return null;
    const array = this.iconArray;
    if (Array.isArray(array[1])) {
      return array[1];
    }
    return null;
  }

  get array3(): CardSuit[] | null {
    if (!this.iconArray || this.cardService?.isFaceCard) return null;
    const array = this.iconArray;
    if (Array.isArray(array[2])) {
      return array[2];
    }
    return null;
  }
  isArray(array: any): array is Array<any> {
    return Array.isArray(array);
  }

  ngOnInit() {
    this.cardService = new CardService(this.value, this.suit);
  }
  // generate values for each card
}
