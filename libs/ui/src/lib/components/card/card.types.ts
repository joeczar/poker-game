export type CardValue =
  | 'A'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K';
export type CardSuit = '♠' | '♣' | '♥' | '♦';
export type CardFacing = 'up' | 'down';
export interface Card {
  value: CardValue;
  suit: CardSuit;
  facing?: CardFacing;
}

export interface CardImageObject {
  type: string;
  suit: CardSuit;
  value: CardValue;
}
export type Ace = 1 | 11;
export type FaceCardValue = 11 | 12 | 13 | Ace;
