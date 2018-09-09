// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	//Get middle to avoid having to loop over entire array
	let middle = Math.floor(str.length / 2);

	if (str.length === 1) {
		return true;
	}

	for (let i = 0; i < middle; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}

	return true;
}

palindrome('abbbcbbba');

module.exports = palindrome;

// function palindrome(str) {
// 	let reversed = '';
// 	const reducer = (char, reversed) => reversed = reversed + char;
// 	return str === str.split('').reduce(reducer);
// }