function setupEventListeners(number) {
	let qty = document.getElementsByTagName('table')[0].lastElementChild.children[number - 1].children[2].children[0];
	let price = document.getElementsByTagName('table')[0].lastElementChild.children[number - 1].children[3].children[0];
	qty.addEventListener('input', function() {
		calculateTotal(number - 1);
	});
	price.addEventListener('input', function() {
		calculateTotal(number - 1);
	});
}
