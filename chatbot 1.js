var list = ["What is your complaint about", "what is your specialization",
    "Which year are you in "
];
var answer1 = [
    ["sakec", "somaiya", "vjti"],
    ["it", "cs", "sxtc", "exc"],
    ["1st", "2nd", "3rd", "4th"]
];

let para = document.getElementById('para');
para.innerHTML = list[0];
var count = 0;

 
function buttonClickCounter() {
    
    count++;
    nextQuestion(count);
    
    var num = answer1[count].length;
    toCreateNewButton(num, count);
    // document.write(num);
}

function nextQuestion(count) {
    // for (var i = count; i < list.length; i++) {
    para.innerHTML = list[count];
    // }
}


function removingExtraButtons() {
    var parent = document.getElementById("buttonrows");
    var child = document.getElementsByTagName("button");
    parent.removeChild(child);
}

function toCreateNewButton(num) {
    for(var n = 0; n<num; n++)
    {

        // var elem = document.getElementsByTagName('button');
        // delete.getElementsByTagName('button'); 
        removingExtraButtons();

        var test8 = document.getElementById('buttonrows');
        var newbutton = document.createElement('button');
        newbutton.className = "btn btn-primary btn1";
        // newbutton.onclick = "buttonClickCounter()";
        newbutton.setAttribute("onclick", "buttonClickCounter()");
        newbutton.type = "button";
        test8.appendChild(newbutton);
        newbutton.innerHTML = answer1[count][n];
    }
    
}