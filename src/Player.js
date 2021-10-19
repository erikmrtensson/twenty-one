/**
 * Module for players.
 *
 * @module Player
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */

import { Hand } from './Hand.js'

/**
 * Represents a Player.
 *
 * @class Player
 */
export class Player extends Hand {
  /**
   * Creates a player.
   *
   * @param {string} player - Playername
   * @param {string} hand - Player hand
   * @class Player
   */
  constructor (player, hand) {
    super(hand, hand)
    this.player = player
    // this.value = value
  }

  /**
   * Gets name of player.
   *
   * @readonly
   * @memberof Player
   */

  get playerName () {
    return this.player
  }

  /**
   * Returns a string that represents the current object.
   *
   * @returns {string} - A string that represents the current object.
   */

  toString () {
    return `${this.playerName} ${super.printHand()} (${super.value()})`
    // \n ${this.result}
  }
}
