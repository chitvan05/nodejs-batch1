function normalfunction(){

    console.log("normal function");
}
normalfunction();


//function type two 

functiontwo = function(){

    console.log(" function type 2");

}
functiontwo();

// arrow function 

arrowfunction = param1 => {

    var toprint = param1;
    console.log(" function type arrow function",toprint);
}
arrowfunction("checking..");

// callback function is function when we pass other function as parameter to one function



function functionOne(x) { 

    console.log(x); 

}

function functionTwo(var1, callback) {
    callback(var1);		
}

functionTwo(2,functionOne);
