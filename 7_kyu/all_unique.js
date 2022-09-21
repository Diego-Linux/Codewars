// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// Link: https://www.codewars.com/kata/553e8b195b853c6db4000048
 
// The intent of the solution below is to be short, don't consider good practices

hasUniqueChars=str=>new Set(str).size==str.length;