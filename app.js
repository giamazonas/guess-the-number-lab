

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1, 
  prevGuesses: [],
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    { this.getGuess = '';
      let i = 0;
      do{
      i = i + i;
      this.prevGuesses = this.getGuess + i;
    }while (i !== this.secretNum);
  } 
  // console.log(game.getGuess())
  },
  getGuess: function(){
    let int = prompt()
      return `Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`
    while (int < this.biggestNum && int > this.smallestNum){
      return input.parseInt()
    } 
    } 
  }
