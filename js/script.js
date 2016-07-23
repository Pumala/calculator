$(document).ready(function(){

var displayNum = "";
var operator = "";
var currNum = "";
    $(".negVal").click(function(){
        var thisNum = $(".inputNum").val();
        if (Number(thisNum)) {
            thisNum = Number(thisNum) * -1;
        }
        displayNum = thisNum;
        $(".inputNum").val(displayNum);
        if (currNum && !operator) {
            currNum = Number(thisNum);
        }
    });
    $(".digit").click(function(){
        var thisNum = $(this).text();
        displayNum += thisNum;
        $(".inputNum").val(displayNum);
    });
    $(".sign").click(function(){
        var newNum = Number(displayNum);
        operator = $(this).text();
        if (!currNum) {
            currNum = newNum;
        } else {
            currNum = currNum;
        }
        displayNum = "";
        $(".inputNum").val(displayNum);
    });
    $(".total").click(function(){
        var newNum = Number(displayNum);
        if (operator && currNum) {
            if (operator === "+") {
                currNum = currNum + newNum;
            } if (operator === "-") {
                currNum = currNum - newNum;
            } if (operator === "*") {
                currNum = currNum * newNum;
            } if (operator === "/") {
                currNum = currNum / newNum;
            } if (operator === "%") {
                currNum = (currNum / 100) * newNum;
            }
        }
        operator = null;
        $(".inputNum").val(currNum);
    });
    $(".clear").click(function(){
        currNum = "";
        displayNum = ""
        $(".inputNum").val(displayNum);
    });
});