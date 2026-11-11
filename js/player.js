export class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    drawCard(card) {
        this.hand.push(card);
    }

    discardCards(number, discardPile) {
        const discardedCards = this.hand.splice(0, number);

        discardPile.push(...discardedCards);
    }

    getHandValue() {
        return this.hand.reduce((total, card) => total + card.value, 0);
    }
}

