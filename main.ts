
/**
 * 
 * Search is one of the oldest features on the web, but that doesn’t mean users always get it right.
 *  In fact, typos are incredibly common. Imagine a user searching for "PlayStation," but they accidentally type "PlauStation" instead.
 *  They still expect to see relevant results, and our search system should be forgiving enough to handle these small mistakes.
    To achieve this, we are going to use a fuzzy search technique that matches similar words even if they’re not spelled exactly the same.
    We’ll implement this using an n-gram similarity algorithm, which breaks words into smaller segments (n-grams) and compares them to find matches.
 * 
    Here is how this will work if you try searching for query PlauStation and the product name is PlayStation:

First, the algorithm will generate bigrams (two-letter sequences) for both words:

PlayStation → ["pl", "la", "ay", "ys", "st", "ta", "at", "ti", "io", "on"]
PlauStation → ["pl", "la", "au", "us", "st", "ta", "at", "ti", "io", "on"]

Then, it calculates the similarity based on the number of overlapping bigrams. The higher the overlap, the closer the match. Since most bigrams match, the algorithm calculates a high similarity score, allowing it to recognize "PlauStation" as a likely match for "PlayStation", even with minor typos. 
 */
export const nGramFuzzySearch = (value: string, query: string, threshold = 2) => {

    const valueGrams = generateNGrams(value.toLowerCase(), threshold)
    const queryGrams = generateNGrams(query.toLowerCase(), threshold)

    const intersection = valueGrams.filter((gram) => queryGrams.includes(gram));

    return intersection.length / Math.max(valueGrams.length, queryGrams.length);
}

const generateNGrams = (str: string, n: number) => {
    const grams: string[] = [];

    for (let i = 0; i <= str.length - n; i++) {
        grams.push(str.slice(i, i + n))
    }

    return grams
}

nGramFuzzySearch('PlayStation', 'PlauStation')
nGramFuzzySearch('PlayStation', 'apple')