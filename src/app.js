/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Erik Mårtensson <em222yy@student.lnu.se>
 * @version 1.0.0
 */
import { PlayerAmount } from './PlayerAmount.js'
import { Deck } from './Deck.js'
import { WrongPlayerAmountError } from './WrongPlayerAmountError.js'
import { DeckEmptyError } from './DeckEmptyError.js'

const main = new WrongPlayerAmountError()
const newDeckError = new DeckEmptyError()

try {
  // Creates deck
  let deck = Deck.create()
  // Shuffles deck
  Deck.shuffle(deck)
  main.errorMessagePlayers()

  const startGame = new PlayerAmount(deck)
  const tossPile = []

  startGame.tryNpm(process.argv[2])
  deck.forEach(function (card) {
    tossPile.push(card)
  })

  // Check if only 1 card remain.
  if (tossPile.length === 51) {
    deck = Deck.create()
    Deck.shuffle(deck)
  } else if (deck.length < 2) {
    newDeckError.deckError(deck)
  }

  // newDeckError.deckError(deck)
  // console.log(deck.join(' '))
} catch (err) {
  if (err instanceof WrongPlayerAmountError) {
    console.error(err.message)
    process.exitCode = 26
  } else if (err instanceof DeckEmptyError) {
    console.error(err.message)
    process.exitCode = 27
  } else if (err) {
    process.exitCode = 1
  }
}
