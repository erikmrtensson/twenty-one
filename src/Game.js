/**
 * Module for the game -- rules, results and players.
 *
 * @module Game
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */
import { Player } from './Player.js'
import { Deck } from './Deck.js'
/**
 * Starts the game and sets the rules.
 *
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @param {*} numberOfPlayers - The number of the player
 * @param {*} deck - For the deck of cards.
 * @param {*} stopNumber - When the player is happy with score.
 */
export function Game (numberOfPlayers, deck, stopNumber) {
  const player = new Player('Player #' + numberOfPlayers + ':')

  const dealer = new Player('Dealer:')

  /**
   * Creates the player.
   *
   * @returns {any} player
   */
  this.printPlayer = function () {
    player.dealCard(Deck.deal(deck))
    player.dealCard(Deck.deal(deck))
    if (player.value() === 21) {
      return player
    } else if (player.value() <= 14) {
      while (player.getHand().length < 5 && player.value() <= stopNumber) {
        player.dealCard(Deck.deal(deck))
      }
    }
    if (player.value() > 21) {
      return player + ' BUSTED!'
    } else {
      return player
    }
  }

  /**
   * Returns the dealer.
   *
   * @returns {any} dealer
   */
  this.printDealer = function () {
    if (player.value() >= 21) {
      return 'Dealer: -'
    } else if (player.value() < 21 && player.getHand().length === 5) {
      return 'Dealer: -'
    } else if (dealer.value() <= 15) {
      while (dealer.getHand().length < 5 && dealer.value() < player.value()) {
        dealer.dealCard(Deck.deal(deck))
      }
    }
    if (dealer.value() > 21) {
      return dealer + ' BUSTED!'
    } else {
      return dealer
    }
  }

  /**
   * The rules of the game and returns result.
   *
   * @returns {string}.
   */
  this.results = function () {
    if (player.value() <= 21 && player.getHand().length === 5) {
      return `Player #${numberOfPlayers} wins!`
    } else if (dealer.value() <= 21 && dealer.getHand().length === 5) {
      return 'Dealer wins'
    } else if (dealer.value() === 21 && dealer.getHand() === 2) {
      return 'Dealer wins.'
    } else if (player.value() > 21) {
      return 'Dealer wins.'
    } else if (dealer.value() > 21) {
      return `Player #${numberOfPlayers} wins!`
    } else if (dealer.value() > player.value() || dealer.value() === player.value()) {
      return 'Dealer wins.'
    } else {
      return `Player #${numberOfPlayers} wins!`
    }
  }

  /**
   * Converts all to string.
   *
   * @returns {string} - A string that displays the players, hand and the winner.
   *
   */
  this.toString = function () {
    return `${this.printPlayer()}\n${this.printDealer()}\n${this.results()}\n\n`
  }
}
