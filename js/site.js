function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        let fbArray = fizzBuzzTernary(fizzValue, buzzValue);
        displayData(fbArray);
    } else {
        alert("You must enter integers.");
    }
}

function fizzBuzzTernary(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "") || i);
        returnArray.push(value);
    }
    return returnArray;
}

function fizzBuzzSwitch(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100 ; i++) {    
        switch (true) {
        case i % fizzValue == 0 && i % buzzValue == 0:{
            returnArray.push("FizzBuzz");
            break;
        }
        case i % buzzValue == 0:{
            returnArray.push("Buzz");
            break;
        }
        case i % fizzValue == 0: {
            returnArray.push("Fizz");
            break;
        }
        default:{
            returnArray.push(i)
        }
        }
    }
    return returnArray;
}

function displayData(fbArray){
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        rowCols[1].classList.add(fbArray[i+1]);
        rowCols[1].textContent = fbArray[i+1];

        rowCols[2].classList.add(fbArray[i+2]);
        rowCols[2].textContent = fbArray[i+2];

        rowCols[3].classList.add(fbArray[i+3]);
        rowCols[3].textContent = fbArray[i+3];

        rowCols[4].classList.add(fbArray[i+4]);
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }
}