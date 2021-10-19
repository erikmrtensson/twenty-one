/**
 * Module for players hand and score.
 *
 * @module Hand
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents the hand.
 *
 * @class Hand
 */
export class Hand {
  constructor (hand = []) {
    this.hand = hand
  }
  /**
   * Returns the hand
   *
   * @memberof Hand
   */

  getHand () {
    return this.hand
  }

  /**
   * Returns the sum of the hand.
   *
   * @memberof Hand
   */

  value () {
    const sum = this.hand.reduce(function (a, b) {
      return a + b
    }, 0)

    // Checks aces
    if (this.printHand().includes('A') && sum < 9) {
      return sum + 13
    }

    return sum
  }

  /**
   * Where player get new card.
   *
   * @param {*} a parameter for deck.
   * @memberof Hand
   */

  dealCard (a) {
    this.hand.push(a)
  }

  /**
   * The cards on hand.
   *
   * @memberof Hand
   */

  printHand () {
    const cardsOnHand = []
    for (let i = 0; i < this.hand.length; i++) {
      cardsOnHand.push(this.hand[i])
    }
    return cardsOnHand.join(' ')
  }
}
