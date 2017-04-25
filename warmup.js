my_max = function(potato){
    return Math.max.apply( Math, potato); //.apply allows you to borrow the Math Fun.
}; // .apply allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes
console.log(my_max([11,22]));

var vowel_count = function(str) { //you can place anything str simply represens string that will be used in the future
   var vowels=['A','E','I','O','U','Y'];
   var count=0;
    for (var i=0; i<str.length; i++){ //will search the length of your loop one at a time to find vowel
        if (vowels.indexOf(str[i].toUpperCase()) != -1) { //indexOf returns a value of -1 if vowel is not found
        //.toUpperCase simply translates your string to all upper case as vowels are all capitalized.
            count ++; //every time it finds a vowel it this adds a count to one.
        }
    }
    return count;
};

console.log(vowel_count("Toronto Raptors"));

function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse("sandwhich"));
//uses the‘reverse() method. This splits the string into a real array, then calls the ‘reverse()’ method and finally returns the joined array.
