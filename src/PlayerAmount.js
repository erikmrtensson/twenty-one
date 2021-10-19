/**
 * Module for number of players.
 *
 * @module PlayerAmount
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { Game } from './Game.js'
/**
 * Sets the amount of players to NPM.
 *
 *
 * @param {*} deck for future deck of cards.
 */
export function PlayerAmount (deck) {
  const playerOne = new Game(1, deck, 17)
  const playerTwo = new Game(2, deck, 14)
  const playerThree = new Game(3, deck, 15)
  const playerFour = new Game(4, deck, 17)
  const playerFive = new Game(5, deck, 18)
  const playerSix = new Game(6, deck, 11)
  const playerSeven = new Game(7, deck, 16)

  /**
   * Checks how many players.
   *
   * @param {*} process - For process.argv
   */

  this.tryNpm = function (process) {
    if (process === '1') {
      console.log(playerOne.toString())
    } else if (process === '2') {
      console.log(playerOne.toString() + playerTwo.toString())
    } else if (!process || process === '3') {
      console.log(playerOne.toString() + playerTwo.toString() + playerThree.toString())
    } else if (process === '4') {
      console.log(playerOne.toString() + playerTwo.toString() + playerThree.toString() +
    playerFour.toString())
    } else if (process === '5') {
      console.log(playerOne.toString() + playerTwo.toString() + playerThree.toString() +
    playerFour.toString() + playerFive.toString())
    } else if (process === '6') {
      console.log(playerOne.toString() + playerTwo.toString() + playerThree.toString() +
    playerFour.toString() + playerFive.toString() + playerSix.toString())
    } else if (process === '7') {
      console.log(playerOne.toString() + playerTwo.toString() + playerThree.toString() +
    playerFour.toString() + playerFive.toString() + playerSix.toString() + playerSeven.toString())
    } else if (process === '20') {
      console.log(this.twentyPlayer())
    } else if (process === '50') {
      console.log(this.fiftyPlayer())
    }
  }

  /**
   * Function for stressing application. 20 players.
   *
   * @param {*} process - For process.argv
   */

  this.twentyPlayer = function () {
    let result = ''
    let dealer = ''
    for (let i = 1; i <= 20; i++) {
      result += new Game(i, deck, 15).printPlayer() + '\n'
    }

    if (deck.length >= 1) {
      deck = Deck.create()
      Deck.shuffle(deck)

      for (let i = 1; i <= 20; i++) {
        dealer += 'Dealer ' + new Game(i, deck, 15).printPlayer() + '\n'
      }
    }

    return result + '\n' + dealer
  }

  /**
   * Function for stressing application. Fifty players.
   *
   * @param {*} process - For process.argv
   */

  this.fiftyPlayer = function () {
    let result = ''
    for (let i = 1; i <= 50; i++) {
      result += new Game(i, deck, 15).printPlayer() + '\n'
    }
    return result
  }
}
