
///////////////////1////////////////////

// console.log(hello);                                   
// var hello = 'world';    

/**
 * var hello;
 * console.log(hello); 
 * hello = 'world';
 * undefined
 */

///////////////////2//////////////////
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

/**
 * var needle;
 * function test(){
 *  var needle;
 *   needle = 'magnet';
 * console.log(needle);
 * needle = 'haystack';
 * test();
} //megnet
 * }
 */
/////////////////3///////////////////////
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
//
// console.log(brendan);

/**
 * //function is not called
 * //super cool
 */

//////////////////4////////////////////////////
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

/**
 
 * var food = 'chicken';
 * console.log(food);
 *  //chicken
 * 
 * function eat(){
 * var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
 *eat();
//HALF CHICKEN


 */
///////////////////5/////////////////

// console.log(food);
// var mean = function() {
//     food = "chicken"; //?????????????????????????????????
//     console.log(food);
//     var food = "fish";
//     console.log(food);
//     return food;
// }
// mean();
// var x = mean();
// console.log(x , "zzzzzzzzzzzzzzzzzzzzz");

// console.log(mean, "ccccccccccccccccccc");
// console.log(food);

/**
 * var mean;
 * mean();
console.log(food);
 mean = function() {
     var food;
     food = "chicken";
     console.log(food);
     food = "fish";
    console.log(food);
}
console.log(food);
 * 

 */

////////////6.///////////////////
// console.log(genre);
// var genre = "disco";

// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);

// }
// console.log(genre);
/**
 * var genre;
 * function rewind() {
 * var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}

console.log(genre);
genre = "disco";
rewind();

console.log(genre);

//undefined
//rock
//r&b
//disco

 */

/////////////7//////////////
//  dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo = "seattle";
//     console.log(dojo);
//       dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

/**
 
 * function learn() {
 * var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
//san jose
seattle
burbank
san jose
 */

/////////////8////////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
         dojo = "closed for now";
    }
    return dojo;
}

/**
 * function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

//////// output
{ name: 'Chicago', students: 65, hiring: true }

 */