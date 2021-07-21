var isEqualsClicked=false
var isPointClicked=false
var isOperatorClicked=false

function buttonClick(val) {
    isOperatorClicked=false
    if(isEqualsClicked==true || document.getElementById("text1").value=='0') {
        document.getElementById("text1").value=val
        isEqualsClicked=false
    }
    else
        document.getElementById("text1").value+=val
}

function operatorClick(val) {
    
    if(isOperatorClicked==false) {
        if(isEqualsClicked==true) {
            document.getElementById("text1").value=val
            isEqualsClicked=false
        }
        else
            document.getElementById("text1").value+=val
        }
    isOperatorClicked=true
}


function clearScr() {
    isPointClicked=false
    document.getElementById("text1").value=0
}

function equalsClick() {
    isPointClicked=false
    var text2=document.getElementById("text1").value
    var result=eval(text2)      // easy way to calculate in javascript
    document.getElementById("text1").value=result
    isEqualsClicked=true
}

function pointClick() {

    if(isPointClicked==false){
        document.getElementById("text1").value+='.'
        isPointClicked=true
    }
    else if(isPointClicked==true && isOperatorClicked==true) {
        document.getElementById("text1").value+='0.'
        isOperatorClicked=false
    }

    
}