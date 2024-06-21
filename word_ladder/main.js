import examples from "./examples.js";
import Queue from "./queue.js";

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

function wordLadder({ beginWord, endWord, wordList }) {
  if (!wordList.includes(endWord)) return [];

  const queue = new Queue();

  // add beginWord to queue
  queue.push({ currentWord: beginWord, path: [] });

  let depth = Infinity;
  let pathFound = false;
  let results = [];
  let currentWord = beginWord;
  let path = [];

  let allItems = [beginWord];

  // bfs
  while (!queue.isEmpty()) {
    ({ currentWord, path } = queue.pop());
    if (path.length > depth) break;

    if (currentWord === endWord) {
      pathFound = true;
      depth = path.length;
      results.push([...path, currentWord]);
    } else if (!pathFound) {
      // add all possible steps to queue with the corresponding path
      for (const step of getPossibleSteps(currentWord, wordList)) {
        if (!path.includes(step)) {
          queue.push({ currentWord: step, path: [...path, currentWord] });
          allItems.push(step);
        }
      }
    }
  }
  // console.log(allItems);
  return results;
}

for (const example of examples) {
  let output = wordLadder(example);
  console.log(output);
}
