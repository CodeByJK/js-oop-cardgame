import { Player } from "./player.js";
import { Deck } from "./deck.js";

console.log("Card Game started!");

// Create deck
const deck = new Deck();

console.log("Original deck:");
console.table(deck.cards);
console.log("Number of cards:", deck.cards.length);

// Shuffle deck
deck.shuffle();

console.log("Shuffled deck:");
console.table(deck.cards);

// Create players
const slim = new Player("Slim");
const luke = new Player("Luke");

console.log("Players:");
console.log(slim);
console.log(luke);

// Deal 5 cards to each player
deck.dealCards(slim, 5);
deck.dealCards(luke, 5);

// Print remaining deck and players
console.log("Remaining deck:");
console.table(deck.cards);

console.log("Slim's hand:");
console.table(slim.hand);

console.log("Luke's hand:");
console.table(luke.hand);

// Calculate hand values
console.log("Slim's hand value:", slim.getHandValue());
console.log("Luke's hand value:", luke.getHandValue());

// PART 3: Discard 2 cards each
slim.discardCards(2, deck.discardPile);
luke.discardCards(2, deck.discardPile);

console.log("Discard pile:");
console.table(deck.discardPile);

// Draw 2 new cards each
deck.dealCards(slim, 2);
deck.dealCards(luke, 2);

// Print updated deck and players
console.log("Deck after drawing:");
console.table(deck.cards);

console.log("Discard pile:");
console.table(deck.discardPile);

console.log("Slim's new hand:");
console.table(slim.hand);

console.log("Luke's new hand:");
console.table(luke.hand);

// Calculate new hand values
console.log("Slim's new hand value:", slim.getHandValue());
console.log("Luke's new hand value:", luke.getHandValue());

// PART 4: Discard all cards
slim.discardCards(5, deck.discardPile);
luke.discardCards(5, deck.discardPile);

// Return all discarded cards to deck
deck.returnDiscards();

// Print results
console.log("Deck after returning all cards:");
console.table(deck.cards);

console.log("Discard pile:");
console.table(deck.discardPile);

console.log("Slim's hand:");
console.table(slim.hand);

console.log("Luke's hand:");
console.table(luke.hand);

// Shuffle deck again
deck.shuffle();

console.log("Shuffled deck:");
console.table(deck.cards);