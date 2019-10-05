let tbody = document.querySelector('tbody');
let body = document.querySelector('body');
let form = document.querySelector('form');
let submit = document.querySelector('#submit');
let localData = [];
const sortBtn = document.querySelector('#sort');



const  cellsNumber =  2;


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
    }

}

const dataToArray = (el) => {
    localData.push(el);
    localStorage.clear();
    localStorage.setItem("localData", JSON.stringify(localData));
    console.log(el);
}


/*============= Sorting method ==============*/
sortBtn.addEventListener('click', () => {
    console.log('triggered');
    let newLocalData = localData.sort();
    localData = newLocalData;
    displayData(localData);
});


submit.addEventListener('click', (event)=> {
    event.preventDefault();
    let inputValue = document.querySelector("input").value;
    if(inputValue) {
        dataToArray(inputValue);
    }
    newEntry();
    displayData(localData);
    console.log(localData);
    console.log(localStorage);

});


/* window.addEventListener('onload', () => {
    const newlocalData = JSON.parse(localStorage.getItem("localData")) ;
    console.log('New localData: ',newlocalData);
    console.log('localData before assignment: ',localData);
    localData = newlocalData;
    console.log('localData after assignment: ',localData);
    for(let i=0; i < localData.length; i++){
        newEntry();
        displayData(localData);
    }


});

console.log('Out of the event listener: ',localData); */
