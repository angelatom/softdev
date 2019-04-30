/*
Angela Tom  
SoftDev2 pd7
K21 -- Onions, Bell Peppers, and Celery, Oh My!
2019-04-30
*/

//console.log(data) // data from the local file (hardcoded js)

temp = data.filter(function(x){
    return (x["DBN"] == "20K201")
});

//console.log(temp)

// Average percent of female students at JHS 201 
var first = temp.reduce(function(a,b) {return a + parseFloat(b['female_per']);}, 0) / temp.length;
console.log(first)
var f = first
// Average number of male students at JHS 201 
var second = temp.reduce(function(a,b) {return a + parseInt(b['male_num']);}, 0) / temp.length;
console.log(second)

// Number of schools with percent of males over 60%
var third = data.filter(function(x){
    return (parseFloat(x["male_per"]) > 60)
});
console.log(third.length)


document.getElementById("one").innerHTML= f.toString();
document.getElementById("two").innerHTML= second.toString();
document.getElementById("three").innerHTML= third.length;