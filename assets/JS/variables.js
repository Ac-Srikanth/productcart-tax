let addBtn = document.getElementsByTagName('div')[0].lastElementChild.firstElementChild.children[0];
let delBtn = document.getElementsByTagName('div')[0].lastElementChild.lastElementChild.children[0];
let subTotal = document.getElementsByTagName('table')[1].children[0].children[0].children[1].children[0];
let taxAmount = document.getElementsByTagName('table')[1].children[0].children[2].children[1];
let grandtotal = document.getElementsByTagName('table')[1].children[0].children[3].children[1];
let sno = 1;
addBtn.addEventListener('click', function() {
	addRow();
});
delBtn.addEventListener('click', function() {
	removeRow();
});
