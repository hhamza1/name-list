let tbody = document.querySelector('tbody');
let form = document.querySelector('form');
let submit = document.querySelector('#submit');
let data = [];

const newEntry = () => {
    for(let i=tbody.rows.length; i<data.length; i++) {
        let newRow = tbody.insertRow(-1);
        newRow.setAttribute('draggable',true); 
        let newCell0 = newRow.insertCell(-1);   
        let newCell1 = newRow.insertCell(0);
    }
}

const displayData = () => {
    for(let i=0; i < data.length; i++) {
        tbody.rows[i].cells[0].innerHTML = data.indexOf(data[i]);
        tbody.rows[i].cells[1].innerHTML = data[i];
        console.log(data.indexOf(data[i+1]));
    }
}

const dataToArray = (el) => {
    data.push(el);
    console.log(el);
}

submit.addEventListener('click', (event)=> {
    event.preventDefault();
    let dataValue = document.querySelector("input").value;
    if(dataValue) {
        dataToArray(dataValue);
    }
    newEntry();
    displayData();
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
})







