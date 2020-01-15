//////////////////   Questions  ///////////////////////
var list = ["What section is your complaint about", "What is category is your complaint about",
    "Teaching Staff or Non-Teaching Staff ", "What is the department", "What is the name of the staff", "Now write a detailed description of your complaint", "Do you wanna show your name or not"," THANK YOU !!!"
];

///////////////////////////  Answers  /////////////////////////////
var answer2 = [
    ["University", "College", "Students"],
    ["Staff", "College", "Students"],
    ["Teaching", "Non-Teaching"],
    ['IT', 'CS', 'EXTC', 'EX', 'MECH'],
    [],
    [],
    ['yes', 'no'],[]
];

let para = document.getElementById('para');
para.innerHTML = list[0];
var count = 0;
let counter = 0;
let inputdata;
let dataarray = [];


//////////////////////     Chat bot functionality        //////////////////////////// 
function toCreateNewButton(count, ID) {

    var num = answer2[count].length;
    for (var i = 0; i < num; i++) {
        var test8 = document.getElementById('buttonrows');
        var newbutton = document.createElement('button');
        newbutton.setAttribute("onclick", "buttonClickCounter()");
        newbutton.className = "btn btn-primary btn1";
        newbutton.type = "button";
        newbutton.id = i + 1;
        newbutton.name = answer2[count][i];
        test8.appendChild(newbutton);
        newbutton.innerHTML = answer2[count][i];
    }
}

function removingExtraButtons(count) {
    var num = answer2[count - 1].length;
    var parent = document.getElementById("buttonrows");
    var child = document.getElementsByClassName("btn1");
    var childn = child.length - 1;
    for (var n = 0; n < num; n++) {
        parent.removeChild(child[0]);
    }

}


// Step 2 after : printing next question
function nextQuestion(count) {

    para.innerHTML = list[count]; // count is 1 


}

// Step 1 after clicking the button 
function buttonClickCounter() {

    count++;
    nextQuestion(count);

    // Making the description box bigger for complaint description
    if (count == 5) {
        let inputfield2 = document.getElementById('inputbox2');
        let inputfield = document.getElementById('inputbox1');
        let submitbtn = document.getElementById('submitbtn');
        inputfield2.setAttribute("style", "display: block;");
        inputfield.setAttribute("style", "display: none;");
        submitbtn.setAttribute("style", "display: block;");
    } else {
        let inputfield2 = document.getElementById('inputbox2');
        inputfield2.setAttribute("style", "display: none;");
        let submitbtn = document.getElementById('submitbtn');
        submitbtn.setAttribute("style", "display: none;");
        let inputfield = document.getElementById('inputbox1');
        inputfield.setAttribute("style", "display: block;");
    }

    if (count == 7) {
        inputbox = document.getElementById('inputbox1');
        inputbox.setAttribute('style', 'display: none;');
        var test8 = document.getElementById('buttonrows');
        var newbutton = document.createElement('button');
        newbutton.setAttribute("onclick", "makeANewComplaint()");
        newbutton.className = "btn btn-primary btn1";
        newbutton.textContent = "Wanna make complaint ?"
        newbutton.type = "button";
        test8.appendChild(newbutton);
    } else {}

    ID = printID();
    // alert(ID);
    creationOnCanvas(ID, count);
    toCreateNewButton(count, ID);
    removingExtraButtons(count);
    clearingTheInput();
}

// Canvas creation functions

function creationOnCanvas(ID, level) {

    switch (level) {
        case 1:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level1').innerHTML = buttontext;
            break;
        case 2:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level2').innerHTML = buttontext;
            break;
        case 3:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level3').innerHTML = buttontext;
            break;
        case 4:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level4').innerHTML = buttontext;
            break;
        case 5:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level5').innerHTML = dataarray[2];
            break;
        case 6:
            buttontext = document.getElementById(ID).name;
            description = document.getElementById('inputbox2').value;
            // br = document.write('<br>')
            // let level6question = document.getElementById('level6').innerHTML;
            // level6question = 'Wanna be anonoymous'; 
            document.getElementById('level6').innerHTML = description;
            break;
        case 5:
            buttontext = document.getElementById(ID).name;
            document.getElementById('level7').innerHTML = buttontext;
            break;


    }

}

function makeANewComplaint() {
    count = 0;
    buttonClickCounter();
}

//////////////// Taking the Data from the text box ///////////////////

function getTheInput(e, count) {
    if (e.type === 'keypress') {

        // Make sure enter key is pressed
        if (e.which == 13 || e.keycode == 13) {
            // let inputdata = [];
            inputdata = document.getElementById('inputbox1').value;
            counter++;
            console.log(counter);
            counter++;
            dataarray[counter] = inputdata;
            console.log("ur input" + dataarray);
            buttonClickCounter();
        } else {}
    }
    // let inputdata = []
    inputdata = document.getElementById('inputbox1').value;
}

function clearingTheInput() {
    document.getElementById('inputbox1').value = '';
    // alert('inputdata '+inputdata );
}

let input = document.getElementById("inputbox1");


// for complaint description entering would have submitted the whole thing
// so now entering in the description box for the complaint wont hit submit !! 
if (count == 5) {

} else {
    input.addEventListener('keypress', getTheInput);
}








// Function to get the id of the tag clicked

function printID(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    console.log("id " + e.id);
    let ids = e.id;
    return ids
}