let table = document.querySelector('#table ');
let tbody = document.querySelectorAll('#table #tbody');
let form = document.querySelector('form');
let submit = document.querySelector('#submit');
let localData = [];
let previousState = []


const sortBtn = document.querySelector('#sort');
const reverse = document.querySelector('#reverse');

console.log();

const newEntry = () => {
    if(localData) {
        console.log(localData);
        for(let i=tbody.length; i<localData.length; i++) {
            let newRow = document.createElement('div');
            let newCell0 = document.createElement('div');
            let newCell1 = document.createElement('div');
            newRow.setAttribute('class','tr'); 
            newRow.setAttribute('id','tbody'); 
            newCell0.setAttribute('class','td');
            newCell1.setAttribute('class','td');
            table.appendChild(newRow);
            newRow.appendChild(newCell0);
            newRow.appendChild(newCell1);
        }
    }
}

const displayData = () => {  //add checking if null
    if(localData) {
            console.log(localData);
            console.log(tbody.length);
            for(let i=tbody.length; i < localData.length; i++) {
                tbody[i].childNodes[1].innerHTML = localData.indexOf(localData[i]+1);
                tbody[i].childNodes[3].innerHTML = localData[i];
        }
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
            Add checkbox for case sensitivity
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

reverse.addEventListener('click', () => {  /* Disable button if no list */
    localData = JSON.parse(localStorage.getItem("previousState")) || [];
    displayData();
});

/*============= Loading the localStorage method ==============*/
/* window.addEventListener('load', () => {
        localData = JSON.parse(localStorage.getItem("localData")) || [];
        previousState = JSON.parse(localStorage.getItem("previousState")) || [];
        newEntry();
        displayData();
}); */

/*===============Label Submission=================*/


submit.addEventListener('click', (event)=> {
    event.preventDefault(); /* Stop propagation -Check the comparison- */
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

/* Clean the code by atomizing the functions and being modular
   Cross browser compatibility 

*/


/*===========Clear local store ===============*/

let clear = document.getElementById('clear');

clear.addEventListener("click", () => {
    localStorage.clear();
});



/*===========Add New Line ===============*/

let newLine = document.getElementById('clear');

newLine.addEventListener("click", () => {
    newEntry();
});