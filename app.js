

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
      
      do {
        this.prevGuesses.push(this.getGuess() 
        )
      }
      while ( 
        // this.getGuess !==
        this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
      },
    
  render: function(){
    let joined = preGuesses.join()

    if (this.secretNum === getGuess) {
    `Congrats! You guessed the number in ${prevGuesses.length}!`}  

    } else (this.secretNum !== getGuess) {
    `Your guess is too ${spectrum} Previous guesses: ${joined}.`}
    
  spectrum = function() 
      if (this.secretNum < getGuess){
        return "high"
      }else (this.secretNum > getGuess){
        return "low"
      }
    }


// play calls this after guess has been made(alerts)
// if secret guessed, congrats message
// else ...
//use interpolation
/// array.join method
