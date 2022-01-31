

const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1, 
  prevGuesses: [],
  secretNum: null,

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
      do {
        this.prevGuesses.push(this.getGuess() ) 
        this.render()
        console.log(this.prevGuesses)
        // prompt (`Try again! Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
      }while ( 
        this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
      },
    
  getGuess: function() {
    let guess; 
    do {
      guess = parseInt (prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }while
    (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum)
    return guess 
  },

  render: function() {
    if(this.secretNum === this.prevGuesses[this.prevGuesses.length -1] ){
    alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
    }else{ 
    alert(`Your guess is too ${this.high||this.low}. 
    Previous guesses: ${this.prevGuesses.join}.`)
  }
//     let high = this.guess > this.biggestNum;
//     let low = this.guess < this.smallestNum;
}
}

// game.play()