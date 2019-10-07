let tbody = document.querySelector('tbody');
let form = document.querySelector('form');
let submit = document.querySelector('#submit');
let localData = [];
let previousState = []


const sortBtn = document.querySelector('#sort');
const reverse = document.querySelector('#reverse');


const newEntry = () => {
    for(let i=tbody.rows.length; i<localData.length; i++) {
        let newRow = tbody.insertRow(-1);
        newRow.setAttribute('draggable',true); 
        let newCell0 = newRow.insertCell(-1);   
        let newCell1 = newRow.insertCell(0);
    }
}

const displayData = (local) => {
    console.log(local);
    for(let i=0; i < local.length; i++) {
            tbody.rows[i].cells[0].innerHTML = local.indexOf(local[i]) + 1;
            tbody.rows[i].cells[1].innerHTML = local[i];
            tbody.rows[i].setAttribute('id',  local.indexOf(local[i]) + 1);
    }

}

const dataToArray = (el) => {
    localData.push(el);
    previousState.push(el);
    localStorage.clear();
    localStorage.setItem("localData", JSON.stringify(localData));
    localStorage.setItem("previousState", JSON.stringify(previousState));
    console.log(el);
}


/*============= Sorting method ==============*/
sortBtn.addEventListener('click', () => {
    let newLocalData = localData.sort();
    localData = newLocalData;
    displayData(localData);
    localStorage.setItem("localData", JSON.stringify(localData));

});

/*============= Loading the localStorage method ==============*/
window.addEventListener('load', () => {
    let loadedData = JSON.parse(localStorage.getItem("localData"));
    console.log(loadedData);
    localData = loadedData;
    console.log(localData);
    newEntry();
    displayData(localData);
});



/*===============Reverse to previous State=================*/

reverse.addEventListener('click', () => {
    displayData(previousState);
});





/*===============Label Submission=================*/


submit.addEventListener('click', (event)=> {
    event.preventDefault();
    let inputValue = document.querySelector("input").value;
    if(inputValue) {
        dataToArray(inputValue);
    }
    newEntry();
    displayData(localData);
});


/*================Drag&Drop=======================*/

