var list = ["What is your complaint about", "what is your specialization",
    "Which year are you in ", "What is your favourite animal"
];
var answer2 = [
    ["sakec", "somaiya", "vjti"],
    ["it", "cs", "sxtc","mech"],
    ["1st", "2nd", "3rd","iit", "mit"],
    ['meow','dog']
];

let para = document.getElementById('para');
para.innerHTML = list[0];
var count = 0;

function toCreateNewButton(count) {

    var num = answer2[count].length;
    // var test8 = document.getElementById('buttonrows');
    // var newbutton = document.createElement('button');
    // alert('in the new button'+count+"num = "+num)
    for (var i = 0; i < num; i++) {
        //   alert('in create button')
        var test8 = document.getElementById('buttonrows');
        var newbutton = document.createElement('button');
        newbutton.setAttribute("onclick", "buttonClickCounter()");
        newbutton.className = "btn btn-primary btn1";
        newbutton.type = "button";
        // test8.appendChild(newbutton);
        test8.appendChild(newbutton);
        newbutton.innerHTML = answer2[count][i];
    }
}

function removingExtraButtons(count) {
    // alert('in the remove function')
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
    // for (var i = count; i < list.length; i++) {
    para.innerHTML = list[count]; // count is 1 
    // removingExtraButtons(count);
    // }

}

// Step 1 after clicking the button 
function buttonClickCounter() {
    
    count++;
    nextQuestion(count);
    // alert("value of count in counter function"+count);
    // toCreateNewButton(num, count);
    toCreateNewButton(count);
    removingExtraButtons(count);

}







