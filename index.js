// Finding input area
let guessById = document.getElementById("guess");
let submitById = document.getElementById("submit");
let attemptsById = document.getElementById("attempt");

// newgame
let newgameById = document.getElementById("newgame")

// Finding max and min
let rangeMinById = document.getElementById("rangeMin");
let rangeMaxById = document.getElementById("rangeMax");

//output
let outputById = document.getElementById("output");

// counter and math
let counter = 0;
let result = Math.floor(Math.random() * 100);

submitById.addEventListener("click", () => {
    
    let guessValue = guessById.value;
    let rangeMin = parseInt(rangeMinById.innerHTML);
    let rangeMax = parseInt(rangeMaxById.innerHTML);
    let guess = parseInt(guessById.value)
    

    if (guessById.value.lenght == 0) {
        alert("Please enter a number")
    } else if(result == guess){
        outputById.innerHTML = ["Congrats. You found the right number."]
    } else if( guess< result && guess> rangeMin) {
        rangeMinById.innerHTML = guessValue;
        counter++
    } else if ( guess > result && guess < rangeMax) {
        rangeMaxById.innerHTML = guessValue;
        counter++
    }else{
        counter++
    }

    console.log(guess < result);
    attemptsById.innerHTML = counter;

    if (counter == 10) {
        document.getElementById("guess").disabled = true;
        document.getElementById("submit").disabled = true;
    }



})





