import examples from "./examples.js";
import Queue from "queue";

function canStep(word1, word2) {
  if (word1.length != word2.length) return false;

  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) diff++;
  }
  return diff == 1;
}

function getPossibleSteps(word, wordList) {
  let possibleSteps = [];
  for (let i = 0; i < wordList.length; i++) {
    if (canStep(word, wordList[i])) possibleSteps.push(wordList[i]);
  }
  return possibleSteps;
}

function bfs({ beginWord, endWord, wordList }) {
  const queue = new Queue();

  // add beginWord to queue
  queue.push(beginWord);

  let depth = 0
  // bfs
  while (true) {
    // add all possible steps to queue
    for (const step of getPossibleSteps(beginWord, wordList))
        queue.push(step)

    

    
    
  }
}

bfs(examples[0]);
