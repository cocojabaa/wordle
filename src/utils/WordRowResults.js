export default class WordRowResult {
  constructor(correctWord, enteredWord) {
    this.correctWord = correctWord;
    this.enteredWord = enteredWord;
  }

  /**
   * Ответ имеет вид: [0, 2, 1, 0, 0], где
   * индекс числа - это индекс буквы в слове,
   * само число - информация (0 - не попал, 1 - буква не на своем месте, 2 - буква на своем месте)
   */
  get results() {
    const results = Array(this.correctWord.length);
    this.enteredWord.split("").forEach((letter, index) => {
      if (letter === this.correctWord[index]) results[index] = 2;
      else if (this.correctWord.includes(letter)) results[index] = 1;
      else results[index] = 0;
    })
    return results;
  }
}