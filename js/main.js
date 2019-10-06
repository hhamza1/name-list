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
        newRow.setAttribute('class','dropzone'); 
        let newCell0 = newRow.insertCell(-1);   
        let newCell1 = newRow.insertCell(0);
        newCell0.setAttribute('class','drag'); 
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
    previousState.push(el);
    localStorage.clear();
    localStorage.setItem("localData", JSON.stringify(localData));
    localStorage.setItem("previousState", JSON.stringify(previousState));
    console.log(el);
}


/*============= Sorting method ==============*/
sortBtn.addEventListener('click', () => {
    console.log('triggered');
    let newLocalData = localData.sort();
    console.log(previousState);
    localData = newLocalData;
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
let dragged ;

document.addEventListener('drag', (event) => { // trigger the drag event

}, false);

document.addEventListener('dragstart', (event) => {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', (event) => {
    event.target.style.opacity = 1;
}, false);

document.addEventListener('dragover', (event) => {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.parentElement.className == "dropzone") {
      event.target.style.background = "#666";
    }
  
  }, false);

  document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.parentElement.className == "dropzone") {
      event.target.style.background = "";
    }
  
  }, false);

  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.parentElement.className== "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.parentElement.appendChild( dragged );
    }
  }, false);


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
