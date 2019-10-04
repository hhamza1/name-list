let table = document.querySelector('table');
let data = ['Bron','Allen','John'];

console.log();

for(let i=0; i < data.length; i++) 
{
    table.rows[i+1].cells[0].innerHTML = data.indexOf(data[i]);
    table.rows[i+1].cells[1].innerHTML = data[i];
}