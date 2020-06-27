function getInput(num){
    return document.getElementById('result').value += num;
}
function displayResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
}
function clearResult(){
    var result = document.getElementById('result');
    result.value = "";
}
function removeNum(){
    var result = document.getElementById('result');
    result.value = result.value.slice(0, result.value.length-1);
}
