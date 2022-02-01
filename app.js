

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
        // play function activates, so render needed after current get guess is entered into prev guesss array
        // console.log(this.prevGuesses)
        
      }while ( 
        this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
      },
    
  getGuess: function() {
    let guess; 
    do {
      guess =  parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }while
    (isNaN(guess) || guess > this.biggestNum || guess < this.smallestNum)
    return guess 
  },

  render: function() {
    // let high = this.prevGuesses[this.prevGuesses.length -1] > this.biggestNum;
    if(this.secretNum === this.prevGuesses[this.prevGuesses.length -1] ){
    alert(`Congrats! You guessed the number in ${this.prevGuesses.length}!`)
    }else if(
      this.prevGuesses[this.prevGuesses.length -1] > this.biggestNum )(
      alert(`Your guess is too high. 
      Previous guesses: ${this.prevGuesses.join(', ')}.`)
    )
    else (
      alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(', ')}.`)
      )
    }
}

// game.play()
