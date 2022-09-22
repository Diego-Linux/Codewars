// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// Link: https://www.codewars.com/kata/57a6633153ba33189e000074

// The intent of the solution below is to be short, don't consider good practices

const orderedCount = (txt) => [...new Set(txt)].map(x => [x, txt.split(x).length - 1])