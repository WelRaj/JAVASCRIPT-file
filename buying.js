var named = ["raj","raju","ajay","gullu","ramu"];

function whoispaying(names){
    var numberofpeople = names.length;
    var randompersonposition = Math.floor(Math.random() * numberofpeople);
    var randomperson = names[randompersonposition];
    return randomperson;
}

console.log(whoispaying(named));
