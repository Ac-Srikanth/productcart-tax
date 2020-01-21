function removeRow() {
	let table = document.getElementsByTagName('table')[0].children[1];
	if (sno > 1) {
		table.deleteRow(-1);
		sno--;
	}
	calculateSubTotal();
}
