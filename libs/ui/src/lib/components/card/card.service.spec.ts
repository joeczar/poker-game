import { CardService } from './card.service';

describe('CardService', () => {
  let cardService: CardService;

  beforeEach(() => {
    cardService = new CardService('2', '♠');
  });

  it('should return 0 if value is not set', () => {
    expect(cardService.numberValue).toBe(0);
  });

  it('should return the correct number value for a card', () => {
    cardService.value = '2';
    expect(cardService.numberValue).toBe(2);

    cardService.value = 'A';
    cardService.aceValue = 11;
    expect(cardService.numberValue).toBe(11);
    cardService.aceValue = 1;
    expect(cardService.numberValue).toBe(1);
  });

  it('should return the correct face value for a card', () => {
    cardService.value = 'J';
    expect(cardService.numberValue).toBe(11);
  });

  it('should correctly identify if the card is a face card', () => {
    cardService.value = '2';
    expect(cardService.isFaceCard).toBe(false);

    cardService.value = 'J';
    expect(cardService.isFaceCard).toBe(true);
  });

  it('should correctly generate an array of card values', () => {
    cardService.suit = '♠';
    cardService.value = '2';
    expect(cardService.generateCardValuesArray()).toHaveLength(2);
    cardService.value = '3';
    expect(cardService.generateCardValuesArray()).toHaveLength(3);
  });
  it('should correctly split arrrays of cardvalues', () => {
    cardService.suit = '♠';
    cardService.value = '4';
    let cardValuesArray = cardService.generateCardValuesArray();
    console.log(cardValuesArray);
    expect(cardValuesArray[0]).toHaveLength(2);
    expect(cardValuesArray[1]).toHaveLength(2);

    cardService.value = '5';
    console.log(cardValuesArray);
    cardValuesArray = cardService.generateCardValuesArray();
    expect(cardValuesArray[0]).toHaveLength(2);
    expect(cardValuesArray[1]).toHaveLength(1);
    expect(cardValuesArray[2]).toHaveLength(2);

    cardService.value = '6';
    cardValuesArray = cardService.generateCardValuesArray();
    expect(cardValuesArray[0]).toHaveLength(3);
    expect(cardValuesArray[1]).toHaveLength(3);
  });
});
