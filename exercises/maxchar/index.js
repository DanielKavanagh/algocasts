// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let chars = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		chars[char] = chars[char] + 1 || 1;
	}

	for (let prop in chars) {
		if (chars[prop] > max) {
			max = chars[prop];
			maxChar = prop;
		}
	}

	return maxChar;

}

module.exports = maxChar;

// function maxChar(str) {
// 	let chars = {};

// 	for (let char of str) {
// 		chars[char] = chars[char] + 1 || 1;
// 	}

// 	return Object.keys(chars).reduce((a, b) => {
// 		if (chars[a] > chars[b]) {
// 			return a;
// 		}

// 		return b;
// 	});
// }