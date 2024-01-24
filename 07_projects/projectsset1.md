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