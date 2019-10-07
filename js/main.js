let tbody = document.querySelector('tbody');
let form = document.querySelector('form');
let submit = document.querySelector('#submit');
let localData = [];
let previousState = []


const sortBtn = document.querySelector('#sort');
const reverse = document.querySelector('#reverse');


const newEntry = () => {
    if(localData){
        for(let i=tbody.rows.length; i<localData.length; i++) {
            let newRow = tbody.insertRow(-1);
            newRow.setAttribute('draggable',true); 
            let newCell0 = newRow.insertCell(-1);   
            let newCell1 = newRow.insertCell(0);
        }
    }
    
}

const displayData = () => {  //add checking if null
    for(let i=0; i < localData.length; i++) {
            tbody.rows[i].cells[0].innerHTML = localData.indexOf(localData[i]) + 1;
            tbody.rows[i].cells[1].innerHTML = localData[i];
            tbody.rows[i].setAttribute('id',  localData.indexOf(localData[i])+ 1);
    }

}

const dataToArray = (el) => {
        localData.push(el);
        previousState.push(el);
        localStorage.clear();
        localStorage.setItem("localData", JSON.stringify(localData));
        localStorage.setItem("previousState", JSON.stringify(previousState));
}




/*============= Sorting method ==============*/
sortBtn.addEventListener('click', () => {
    let newLocalData = localData.sort((a,b) => { 
        /*
            Higher Order function to allow Case insensitive sorting
        */
        let x = a.toLowerCase();
        let y = b.toLowerCase();

        if(x < y) {
            return -1;
        }
        if(x < y) {
            return 1;
        }
        
        return 0;
    });
    localData = newLocalData;
    displayData();
    localStorage.setItem("localData", JSON.stringify(localData));

});

/*===============Reverse to previous State=================*/

reverse.addEventListener('click', () => {
    localData = previousState;
    displayData();
});

/*============= Loading the localStorage method ==============*/
window.addEventListener('load', () => {
        localData = JSON.parse(localStorage.getItem("localData")) || [];
        previousState = JSON.parse(localStorage.getItem("previousState")) || [];
        newEntry();
        displayData();
});

/*===============Label Submission=================*/


submit.addEventListener('click', (event)=> {
    event.preventDefault();
    let inputValue = document.querySelector("input").value;
    if(inputValue) {
        if(localData) {
            dataToArray(inputValue);
        }
    }
    newEntry();
    displayData();
});


/*================Drag&Drop=======================*/

