function invert(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			array.splice(i, 1, Math.abs(array[i]));
		}
		else {
			array.splice(i, 1, -Math.abs(array[i]));
		}
	}
	return array;
}

console.log(invert([1, -2, 3, -4, 5]));