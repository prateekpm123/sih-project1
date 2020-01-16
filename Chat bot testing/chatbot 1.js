
//////////////////   Questions  ///////////////////////
var list = ["What is your complaint about", "what is your specialization",
    "Which year are you in ", "What is your favourite animal"
];

///////////////////////////  Answers  /////////////////////////////
var answer2 = [
    ["sakec", "somaiya", "vjti"],
    ["it", "cs", "sxtc","mech"],
    ["1st", "2nd", "3rd","iit", "mit"],
    ['meow','dog']
];

let para = document.getElementById('para');
para.innerHTML = list[0];
var count = 0;
let counter = 0;
let inputdata;
let dataarray = [];


//////////////////////     Chat bot functionality        //////////////////////////// 
function toCreateNewButton(count) {

    var num = answer2[count].length;
    for (var i = 0; i < num; i++) {
        var test8 = document.getElementById('buttonrows');
        var newbutton = document.createElement('button');
        newbutton.setAttribute("onclick", "buttonClickCounter()");
        newbutton.className = "btn btn-primary btn1";
        newbutton.type = "button"
        test8.appendChild(newbutton);
        newbutton.innerHTML = answer2[count][i];
    }
}

function removingExtraButtons(count) {
    var num = answer2[count-1].length;
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
    // alert("value of count in counter function"+count);
    // toCreateNewButton(num, count);
    toCreateNewButton(count);
    removingExtraButtons(count);
    clearingTheInput();

}

//////////////// Taking the Data from the text box ///////////////////

function getTheInput(e,count) {
    if(e.type === 'keypress'){

        // Make sure enter key is pressed
        if(e.which == 13 || e.keycode == 13){
            // let inputdata = [];
            inputdata = document.getElementById('inputbox1').value;
            counter ++;
            console.log(counter);
            counter++;
            dataarray[counter] = inputdata;
            console.log("ur input"+dataarray);
            buttonClickCounter();
        }
        else {}
    }
    // let inputdata = []
    inputdata = document.getElementById('inputbox1').value;
}

function clearingTheInput() {
    document.getElementById('inputbox1').value = '';
    alert('inputdata '+inputdata );
}

let input = document.getElementById("inputbox1");
input.addEventListener('keypress', getTheInput);





