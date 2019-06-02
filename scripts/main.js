let arr = [];
let val = document.getElementById('kavo');

document.getElementById("add").addEventListener("click", function(){
    if(typeof val.value == 'number'){
        let tempValue = +val.value;
        arr.push(tempValue);
    }else{
        alert("you have entered not nubmer, try more");
    }
    document.getElementById("kavo").value = "";
});

function mult(someArray){
    let multiplied = 1;
    for(let i = 0; i < someArray.length; i++){
        multiplied = multiplied * someArray[i];
    }
    return multiplied / someArray.length;
}

document.getElementById("delArray").addEventListener("click", function(){
    arr.pop();
});

document.getElementById("count").addEventListener("click", function(){
    console.log(mult(arr));
});

document.getElementById("show").addEventListener("click", function(){
    console.log(arr);
})