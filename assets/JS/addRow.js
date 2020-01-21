function addRow() {
	let table = document.getElementsByTagName('table')[0].children[1];
	let rowCount = table.rows.length;
	let trow = table.insertRow(rowCount);
	trow.innerHTML = `<td>${sno}</td>
    <td><input type='text' name='item${sno} '></td>
    <td><input type='number' name='quantity${sno}' ></td>
    <td><input type='number' name='price${sno}'></td>
    <td><input type='number' name='total' disabled</td>`;
	setupEventListeners(sno);
	sno++;
}
