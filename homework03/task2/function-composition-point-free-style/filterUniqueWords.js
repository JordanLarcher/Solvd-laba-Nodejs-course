/**
 * The task:
 * split text into words
 * normalize case
 * dedupe
 * sort
 */

// helpers

const matchWords = str => str.match(/\b\w+\b/g) || [];
const toLowerCaseArray = array => array.map( word => word.toLowerCase());
const uniqueWord = array => [...new Set(array)]; //
const sortWordsAlphab = array => [...array].sort();


const filterUniqueWords = str =>
    sortWordsAlphab(
        uniqueWord(
            toLowerCaseArray(
                matchWords(str)
            )
        )
    );