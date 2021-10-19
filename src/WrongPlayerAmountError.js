/**
 * Module for wrong player amount error.
 *
 * @module WrongPlayerAmountError
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Creates error.
 *
 * @class WrongPlayerAmountError
 */
export class WrongPlayerAmountError extends Error {
  constructor (message) {
    super(message)
    this.name = 'My Error'
  }

  /**
   * Checks if invalid players.
   *
   * @memberof WrongPlayerAmountError
   */

  errorMessagePlayers () {
    if (process.argv[2] !== '20' && process.argv[2] !== '50' && process.argv[2] > 7) {
      throw new WrongPlayerAmountError('Not a valid number of players')
    }
  }
}
