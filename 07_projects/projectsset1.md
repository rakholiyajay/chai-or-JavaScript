# projects related to DOM

## project link  
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Jay")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);

    //if else condition

    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    } else {
      body.style.backgroundColor = event.target.id;
    }
  });
});


```

## Project 2 Solution

```javascript
const form = document.querySelector('form');
//if i get the value outside the submit button function then when the time page load the height and weight value automatically set the empty because anyone doesn't give any values
const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  // we also get the result we doesn't want value so we dont use the .value and also it is an only element so we didn't use the parseInt
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //display in result
    results.innerHTML = `<span>${bmi}<span/>`;

   //condition that we display the message thay you weight indicate the message
    if (bmi <= 18.6) {
      results.innerHTML += '<br>Under Weight';
      results.style.color = 'purple';
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML += '<br>Your weight is normal';
      results.style.color = 'blue';
    } else {
      results.innerHTML +=
        '<br>Your weight is too high, please start exercising';
      results.style.color = 'black';
    }

  }
});

```

## Project 3 Solution

```javascript
// 1st way
// const clockid = document.getElementById('clock')

// 2nd way
const clock = document.querySelector('#clock');

//setInterval method is said you give me one method and also said how much time in gap i can update or refresh the function
setInterval(function () {
  //Date
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 3 my customized code

### (also changes in the html file)

```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  const time = new Date();
  // console.log(date.toLocaleDateString());

  clock.innerHTML = time.toLocaleTimeString();
}, 1000);

const date = document.querySelector('#date');

setInterval(function () {
  const date2 = new Date();
  date.innerHTML = date2.toLocaleDateString();
}, 1000);

```

## Project 4 Solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGames = true;

if (playGames) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//validate if the user is allowed only number in the value and the value is not greater than the 100 because the min value is 1 or max value is the 100 all the validation is in this particular function
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter An Valid Number');
  } else if (guess < 1) {
    alert('Please Enter An Number more than 1');
  } else if (guess > 100) {
    alert('Please Enter An Number less than 100');
  } else {
    prevGuess.push(guess);
    //check the your try is finish if the try will be finish so then you end the game
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

//by the use of this function we show the message that your value is less than or greater then max or min value
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulation Your Guess Is Correct`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your Guessed Value id Tooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your Guessed Value id Tooo High`);
  }
}

//all other work is done in this function like display the guess value
function cleanUpGuess(guess) {
  //clean up the value (Cleanup method)
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//this function is direcrtly with the dom like display method
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}<h2/>`;
}

//To end a game
function endGame() {
  userInput.innerHTML = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game<h2/>`;
  startOver.appendChild(p);
  playGames = false;
  newGame();
}

//To start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGames = true;
  });
}

```