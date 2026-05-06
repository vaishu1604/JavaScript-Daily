// Reverse a string without using reverse() method.


function reverseString(str) {
    var reversed = "";

    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

var result = reverseString("servicenow");
gs.print(result); // wonwsecivres
