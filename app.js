

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1, 
  prevGuesses: [],
  secretNum: null,

  getGuess: function() {
    let guess; 
    do {
      guess = parseInt (prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
    )}
    while
    (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum)
    return guess
  },

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    let prevGuesses = []
    while this.prevGuesses.push(this.getGuess() 
    {
      this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
    }
    
  }

// render: function(){
// // play calls this after guess has been made(alerts)
// // if secret guessed, congrats message
// // else ...
// //use interpolation
// /// array.join method
// if 
// }

}
// console.log(game.play())