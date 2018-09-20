// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let strArray = str.split(' ');

	strArray.forEach(function (value, index) {
		if (value.length === 1) {
			strArray[index] = value[0].toUpperCase();
		} else {
			strArray[index] = value[0].toUpperCase() + value.slice(1);
		}
	});

	return strArray.join(' ');
}

module.exports = capitalize;
