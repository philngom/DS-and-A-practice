function reverseWords(sentence) {
  let sentenceArr = sentence.split('');
  sentenceArr = sentenceArr.reverse().join('');
  return sentenceArr;
}

console.log(reverseWords('Took my dog for a walk'));

function oddishOrEvenish(number) {
  let total = 0;
  // const numberArr = number.split('');

  const numberStr = number + '';
  numberStr.split('').map((number) => total += +number);

  return total % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(121));

function anagrams(wordOne, wordTwo) {

  function countWord(word) {
    const countedWord = word.split('').reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 1;
      } else {
        acc[curr]++;
      }
      return acc;
    }, {});
    return countedWord;
  }
  const wordOneCount = countWord(wordOne);
  const wordTwoCount = countWord(wordTwo);

  if (wordOne.length !== wordTwo.length) return false;
  for (const key in wordOneCount) {
    if (wordOneCount[key] !== wordTwoCount[key]) {
      return false;
    }
  }
  return true;

}

console.log(anagrams('superintended', 'unpredestined'));
console.log(anagrams('pictorialness', 'documentarily'));
