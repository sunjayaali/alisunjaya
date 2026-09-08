export enum TileStatus {
  Correct = 'correct',
  Wrong = 'wrong',
  Incorrect = 'incorrect',
  Empty = '',
}
export enum GameStatus {
  Playing = 'playing',
  Won = 'won',
  Lost = 'lost',
}
export enum Key {
  Enter = 'ENTER',
  Backspace = 'BACKSPACE',
}
export interface Tile {
  status: TileStatus
  letter: string[]
}

const KEYBOARD = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
]
const WORDS = [
  // 3
  'GOD',
  'EVE',

  // 4
  'AMEN',
  'LOVE',
  'PRAY',
  'LORD',
  'HOLY',
  'LIFE',
  'WORD',
  'LAMB',
  'SOUL',
  'NOAH',
  'ADAM',
  'JOHN',
  'PAUL',
  'RUTH',
  'ZION',
  'WINE',

  // 5
  'FAITH',
  'GRACE',
  'PEACE',
  'TRUTH',
  'MOSES',
  'CROSS',
  'JESUS',
  'LIGHT',
  'SHEEP',
  'GLORY',
  'MERCY',
  'BLESS',
  'ANGEL',
  'DAVID',
  'PETER',
  'ISAAC',
  'JACOB',
  'HEART',
  'EARTH',
  'WATER',
  'BREAD',

  // 6
  'HEAVEN',
  'PRAISE',
  'CHRIST',
  'SPIRIT',
  'TEMPLE',
  'SAMUEL',
  'ESTHER',
]

export const useWordle = defineStore('wordle', {
  state: () => {
    return {
      answer: '',
      keyboard: KEYBOARD,

      rows: 0,
      columns: 0,

      board: [] as Tile[][],

      currentRow: 0,
      currentColumn: 0,
      gameStatus: GameStatus.Playing,
    }
  },

  actions: {
    init() {
      this.answer = WORDS[Math.floor(Math.random() * WORDS.length)]!
      this.rows = this.answer.length + 1
      this.columns = this.answer.length
      this.board = Array.from({ length: this.rows }, () =>
        Array.from({ length: this.columns }, (): Tile => ({
          status: TileStatus.Empty,
          letter: [''],
        })),
      )

      this.currentRow = 0
      this.currentColumn = 0
      this.gameStatus = GameStatus.Playing
    },

    handleKeydown(event: KeyboardEvent) {
      this.handleKey(event.key.toUpperCase())
    },

    handleKey(key: string) {
      if (this.gameStatus !== GameStatus.Playing) return

      const row = this.board[this.currentRow]
      if (!row) return

      if (/^[a-zA-Z]$/.test(key)) {
        const tile = row[this.currentColumn]
        if (!tile) return
        if (tile.letter[0]) return

        tile.letter = [key]

        if (this.currentColumn < this.columns - 1) {
          this.currentColumn++
        }

        return
      }

      if (key === Key.Backspace) {
        const tile = row[this.currentColumn]

        if (!tile) return

        if (tile.letter[0]) {
          tile.letter = ['']
          return
        }

        if (this.currentColumn > 0) {
          this.currentColumn--
          row[this.currentColumn]!.letter = ['']
        }

        return
      }

      if (key === Key.Enter) {
        if (
          this.currentColumn === this.columns - 1 &&
          row.every((tile) => tile.letter[0] !== '')
        ) {
          this.guess()
        }
      }
    },

    async guess() {
      const row = this.board[this.currentRow]

      if (!row) return

      const guess = row.map((tile) => tile.letter[0] ?? '')
      const statuses: TileStatus[] = Array(this.columns).fill(
        TileStatus.Incorrect,
      )

      const remaining = this.answer.split('')

      // Correct letters first
      for (let i = 0; i < this.columns; i++) {
        if (guess[i] === this.answer[i]) {
          statuses[i] = TileStatus.Correct
          remaining[i] = ''
        }
      }

      // Wrong position / incorrect
      for (let i = 0; i < this.columns; i++) {
        if (statuses[i] === TileStatus.Correct) continue

        const index = remaining.indexOf(guess[i]!)

        if (index !== -1) {
          statuses[i] = TileStatus.Wrong
          remaining[index] = ''
        }
      }

      // Reveal one by one
      for (let i = 0; i < this.columns; i++) {
        await new Promise((resolve) => setTimeout(resolve, 200))

        row[i]!.status = statuses[i]!
      }

      if (guess.join('') === this.answer) {
        this.gameStatus = GameStatus.Won
        return
      }

      if (this.currentRow === this.rows - 1) {
        this.gameStatus = GameStatus.Lost
        return
      }

      this.currentRow++
      this.currentColumn = 0
    },

    keyboardStatus(key: string): TileStatus {
      const tiles = this.board.flat()

      const statuses = tiles
        .filter((tile) => tile.letter[0] === key)
        .map((tile) => tile.status)

      if (statuses.includes(TileStatus.Correct)) return TileStatus.Correct
      if (statuses.includes(TileStatus.Wrong)) return TileStatus.Wrong
      if (statuses.includes(TileStatus.Incorrect)) return TileStatus.Incorrect

      return TileStatus.Empty
    },
  },
})
