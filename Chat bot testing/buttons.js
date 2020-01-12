var answer1 = [
    "sakec", "somaiya", "vjti"

];


var count = 0;
var parent = document.getElementById("containers");
var child = document.getElementsByTagName("button");

function nextbutton(count) {
    var test8 = document.getElementById('containers');
    var newbutton = document.createElement('button');
    newbutton.setAttribute("onclick", "buttoncounter()");

    test8.appendChild(newbutton);
    newbutton.innerHTML = answer1[count];
}

function deleteprevious() {
    // var parent = document.getElementById("containers");
    // var child = document.getElementsByTagName("button");
    parent.removeChild(child[0]);
    // alert('in delete');
}

function buttoncounter() {
    count++;
    nextbutton(count);
    deleteprevious();
}