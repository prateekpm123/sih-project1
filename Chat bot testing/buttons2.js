var answer1 = [
    "sakec", "somaiya", "vjti"

];
var answer2 = [
    ["sakec", "somaiya", "vjti"],
    ["it", "cs", "sxtc"],
    ["1st", "2nd", "3rd"],
    ['meow', 'dog', 'cat']
];

var count = 0;
// var parent = document.getElementById("containers");
// var child = document.getElementsByTagName("button"); 

function nextbutton(count) {
    
    var test8 = document.getElementById('containers');
    var newbutton = document.createElement('button');
    var num = answer2[count].length;
    // alert('in the new button')
    for (var i = 0; i < num ; i++) {
        var test8 = document.getElementById('containers');
        var newbutton = document.createElement('button');
        newbutton.setAttribute("onclick", "buttoncounter()");
        test8.appendChild(newbutton);
        newbutton.innerHTML = answer2[count][i];
    }
}



function deleteprevious() {
    var num = answer2[count-1].length;
    parent = document.getElementById("containers");
    var child = document.getElementsByTagName("button");
    for(var i=0; i<3; i++)
    {
        // parent = document.getElementById("containers");
        // var child = document.getElementsByTagName("button");
        parent.removeChild(child[0]);
    }
    
    // alert('in delete');
}

function buttoncounter() {
    ++count;

    nextbutton(count);
    deleteprevious();
}

