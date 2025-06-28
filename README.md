# 🧐 Fuzzy Search Playground

A tiny and practical JavaScript/TypeScript library + demo for **fuzzy searching**—let your users find what they mean, not just what they type!

---

## 🚀 Features

- Easy-to-use fuzzy search for strings and arrays
- Supports typos, missing letters, swapped letters, and more!
- Includes both a simple Levenshtein-based algorithm and [Fuse.js](https://fusejs.io/) integration for high performance and advanced needs
- Fully typed in TypeScript
- Demo examples: command line & React

---

## 🤔 Why Fuzzy Search?

Traditional JS methods (`includes`, `startsWith`, `===`) require **exact** matches.  
**Fuzzy search** helps users even if they:
- Misspell words (“aple” for “apple”)
- Swap letters (“appel” for “apple”)
- Type only part of the word  
It’s perfect for user-friendly search bars, autocomplete, and anything accepting unpredictable human input!

---