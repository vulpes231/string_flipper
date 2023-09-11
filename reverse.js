function reverseString(word) {
  // create an array to hold the iterated string
  let tempArr = [];

  let reversedWord = "";

  for (let i = 0; i < word.length; i++) {
    tempArr.push(word[i]);
  }

  while (tempArr.length > 0) {
    reversedWord += tempArr.pop();
  }

  return reversedWord;
}

export default reverseString;
