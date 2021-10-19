/**
 * Module for empty deck error.
 *
 * @module DeckEmptyError
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates error message.
 *
 * @class DeckEmptyError
 */
export class DeckEmptyError extends Error {
  constructor (message) {
    super(message)
    this.name = 'My Error'
  }

  /**
   * Checks if deck empty.
   *
   * @param {*} deck - the deck to check.
   * @memberof DeckEmptyError
   */

  deckError (deck) {
    if (!deck.length) {
      throw new DeckEmptyError('No more cards!')
    }
  }
}
