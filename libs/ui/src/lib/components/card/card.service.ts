import { Injectable } from '@angular/core';
import { CardValue, CardSuit, FaceCardValue, Ace } from './card.types';

/**
 * This service is used to generate the card images
 *
 */

export class CardService {
  value!: CardValue;
  suit!: CardSuit;
  aceValue: Ace = 1;
  constructor(value: CardValue, suit: CardSuit) {
    this.value = value;
    this.suit = suit;
  }
  get faceValueMap(): Record<string, FaceCardValue> {
    return {
      J: 11,
      Q: 12,
      K: 13,
      A: this.aceValue,
    } as const;
  }

  get isFaceCard() {
    return typeof this.cardValueMap[this.value] === 'string';
  }

  get numberValue() {
    if (!this.value) return 0;
    if (this.isFaceCard) {
      return this.faceValueMap[this.value];
    }

    return this.cardValueMap[this.value];
  }

  cardValueMap = {
    A: 'A',
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    J: 'J',
    Q: 'Q',
    K: 'K',
  } as const;

  generateCardValuesArray(): CardSuit[] | CardSuit[][] {
    const valuesArray: CardSuit[] = [];

    if (!this.isFaceCard) {
      for (let i = 0; i < this.numberValue; i++) {
        valuesArray.push(this.suit);
      }
    } else {
      valuesArray.push(this.suit);
    }

    const value = this.cardValueMap[this.value];

    if (!this.isFaceCard && value > 3) {
      if (valuesArray.length % 2 === 1) {
        const middleIndex = Math.floor(valuesArray.length / 2);

        return [
          [...valuesArray.slice(0, middleIndex)],
          [valuesArray[middleIndex] as CardSuit],
          [...valuesArray.slice(middleIndex + 1)],
        ];
      }
      if (value === 10) {
        // return 3 arrays of  4, 2, 4
        return [
          [...valuesArray.slice(0, 4)],
          [...valuesArray.slice(4, 6)],
          [...valuesArray.slice(6)],
        ];
      }
      const evenAndHigherThan3 = [
        [...valuesArray.slice(0, valuesArray.length / 2)],
        [...valuesArray.slice(valuesArray.length / 2)],
      ];

      return evenAndHigherThan3;
    } else {
      return valuesArray;
    }
  }
}
