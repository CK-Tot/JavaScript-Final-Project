// creating a card class here. Each card will have a suit and a rank;
class Card
{
	constructor(suit, rank)
	{
		this.suit = suit;
		this.rank = rank;
		this.suitIcons = 
		{
			'hearts': '♥️',
			'diamonds': '♦️',
			'clubs': '♣️',
			'spades': '♠️'
		};
		this.rankValues = 
		{
			'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
			'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14
		};
	}

	toString()
	{
		return `${this.rank} of ${this.suitIcons[this.suit]}`;
	}

	valueOf()
	{
		return this.rankValues[this.rank];
	}
}


// This will be our deck class. It represents a full deck of cards.

class Deck 
{
	constructor()
	{
		// Stroring the cards in an array
		this.cards = [];
		const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
		const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		for ( let suit of suits)
			{
				for (let rank of ranks)
					{
						this.cards.push(new Card(suit, rank))
					}
			}

	}


	// now I will shuffle the deck
	shuffle()
	{
		for (let i = this.cards.length - 1; i > 0; i--)
			{
				const j = Math.floor(Math.random() * (i + 1));
				[this.cards[i], this.cards[j]] =  [this.cards[j], this.cards[i]]; 
			}
	}

	// this method deals with a specified number of cards to specified number of plaers.
	dealCards(player1, player2)
	{
		while (this.cards.length > 0)
			{
				player1.hand.push(this.cards.pop());
				player2.hand.push(this.cards.pop());
			}
	}
}

// each player has a name, hand of cards, and a score.
class Player 
{
	constructor(name)
	{
		this.name = name;
		this.hand = [];
		this.score = 0;
	}

	// this method allows a player to play a card from their hand.
	playCard()
	{
		return this.hand.shift();
	}
}

// play game

const player1  = new Player ('Mark');
const player2  = new Player ('Zay');

const deck = new Deck();
deck.shuffle();
deck.dealCards(player1, player2);


// Game Logic
while (player1.hand.length > 0 && player2.hand.length > 0)
	{
		const card1 = player1.playCard();
		const card2 = player2.playCard();

		console.log(`${player1.name} plays ${card1}`);
		console.log(`${player2.name} plays ${card2}`);

		if (card1.valueOf() > card2.valueOf())
			{
				player1.score++;
				console.log(`${player1.name} wins the round`);

			}else if(card1.valueOf() < card2.valueOf())
				{
					player2.score++;
					console.log(`${player2.name} wins the round`)
				}else{
					console.log('its a tie!!');
				}

	}


	// display Score

	console.log(`Final Score..... ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`);

	if (player1.score > player2.score)
		{
			console.log(`${player1.name} wins the game!!`);
		}else if(player1.score < player2.score)
			{
				console.log(`${player2.name} wins the game!!`)
			}else{
				console.log('Its a tie Game!!')
			}

