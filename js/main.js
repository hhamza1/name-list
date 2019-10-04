let tbody = document.querySelector('tbody');
let data = ['Bron','Allen','John','Woody','Jayjay','Kiki'];

console.log('Data: ', data);
console.log('Table rows: ', tbody.rows.length);


for(let i=tbody.rows.length; i<data.length; i++) {
    let newRow = tbody.insertRow(-1);
    newRow.setAttribute('draggable',true); 
    let newCell0 = newRow.insertCell(-1);   
    let newCell1 = newRow.insertCell(0);
}

for(let i=0; i < data.length; i++) {
    tbody.rows[i].cells[0].innerHTML = data.indexOf(data[i]);
    tbody.rows[i].cells[1].innerHTML = data[i];
}
