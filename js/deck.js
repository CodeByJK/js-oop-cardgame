import { Card } from "./card.js";

export class Deck {
  constructor() {
    this.cards = [];
    this.discardPile = [];

    this.createDeck();
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

    const ranks = [
      { name: "Ace", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
      { name: "Jack", value: 11 },
      { name: "Queen", value: 12 },
      { name: "King", value: 13 },
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        const card = new Card(suit, rank.name, rank.value);

        this.cards.push(card);
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[i],
      ];
    }
  }

  drawCard() {
    return this.cards.pop();
  }
  dealCards(player, number) {
    for (let i = 0; i < number; i++) {
      const card = this.drawCard();

      player.drawCard(card);
    }
  }

  returnDiscards() {
    this.cards.push(...this.discardPile);
    this.discardPile = [];
}
}
