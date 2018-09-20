// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	if (cleanString(stringA) === cleanString(stringB)) {
		return true;
	}

	return false;
}

function cleanString(string) {
	return string.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
// 	stringA = normaliseString(stringA);
// 	stringB = normaliseString(stringB);

// 	if (stringA.length !== stringB.length) {
// 		return false;
// 	}

// 	let mapA = createCharMap(stringA);
// 	let mapB = createCharMap(stringB);

// 	for (let char in mapA) {
// 		if (mapA[char] !== mapB[char]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// function normaliseString(string) {
// 	return string.replace(/[^\w]/g, '').toLowerCase();
// }

// function createCharMap(string) {
// 	let map = {};

// 	for (let char of string) {
// 		map[char] = map[char] + 1 || 1;
// 	}

// 	return map;
// }
