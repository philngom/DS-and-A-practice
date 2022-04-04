function reverseWords(sentence) {
  let sentenceArr = sentence.split('');
  sentenceArr = sentenceArr.reverse().join('');
  return sentenceArr;
}

console.log(reverseWords('Took my dog for a walk'));