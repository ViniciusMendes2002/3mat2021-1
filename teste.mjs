var x = prompt("enter number", "7");
var i = 0;
var binaryvar = " ";

function add(n) {
    if (n == 0) {
        binaryvar = "0" + binaryvar; 
    }
    else {
        binaryvar = "1" + binaryvar;
    }
}

function binary() {
    while (i < 1) {
        if (x == 1) {
            add(1);
            document.write(binaryvar);
            break;
        }
        else {
            if (x % 2 == 0) {
                x = x / 2;
                add(0);
            }
            else {
                x = (x - 1) / 2;
                add(1);
            }
        }
    }
}

binary();