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
