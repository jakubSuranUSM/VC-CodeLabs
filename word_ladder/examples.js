const examples = [
  {
    beginWord: "hit",
    endWord: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
    expectedOutput: [
      ["hit", "hot", "dot", "dog", "cog"],
      ["hit", "hot", "lot", "log", "cog"],
    ],
  },
  {
    beginWord: "lost",
    endWord: "cost",
    wordList: ["most", "fost", "cost", "host", "lost"],
    expectedOutput: [["lost", "cost"]],
  },
  {
    beginWord: "start",
    endWord: "endit",
    wordList: [
      "stark",
      "stack",
      "smack",
      "black",
      "endit",
      "blink",
      "bline",
      "cline",
    ],
    expectedOutput: [],
  },
  {
    beginWord: "red",
    endWord: "tax",
    wordList: ["ted", "tex", "red", "tax", "tad", "den", "rex"],
    expectedOutput: [
      ["red", "ted", "tad", "tax"],
      ["red", "rex", "tex", "tax"],
    ],
  },
  {
    beginWord: "a",
    endWord: "b",
    wordList: ["a", "b", "c"],
    expectedOutput: [["a", "b"]],
  },
];

export default examples;
