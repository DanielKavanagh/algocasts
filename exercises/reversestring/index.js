// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	arr = str.split('');
	arr = arr.reverse().join("");
	return arr;
}

function reverseLoop(str) {
	var reversed = '';

	for (var i = 0; i < str.length; i++) {
		reversed = str[i] + reversed;
	}

	return reversed;
}


module.exports = reverseLoop, reverseHelper ;
