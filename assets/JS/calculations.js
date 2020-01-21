function calculateTotal(no) {
	let qty = document.getElementsByTagName('table')[0].lastElementChild.children[no].children[2].children[0];
	let price = document.getElementsByTagName('table')[0].lastElementChild.children[no].children[3].children[0];
	let total = document.getElementsByTagName('table')[0].lastElementChild.children[no].children[4].children[0];
	total.value = parseFloat(qty.value) * parseFloat(price.value);
	calculateSubTotal();
}

function calculateSubTotal() {
	let totals = document.getElementsByName('total');
	let amount = 0;
	let tax = 0;
	for (let i = 0; i < totals.length; i++) {
		amount += parseFloat(totals[i].value);
	}
	subTotal.value = amount;
	tax = 10 / 100 * amount;
	taxAmount.textContent = tax;
	grandtotal.textContent = amount + tax;
}
