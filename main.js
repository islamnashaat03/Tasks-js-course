// 1

var x = '10';
console.log(+x);
console.log('================================');

// 2

var candies = {
  chocolate: 10,
  lollipops: null,
  sourStrips: undefined,
  jellyBeans: 8,
  licorice: null,
};
var gummyBeras = 1;
function checkCandies() {
  console.log(candies.chocolate ?? gummyBeras);
  console.log(candies.lollipops ?? gummyBeras);
  console.log(candies.sourStrips ?? gummyBeras);
  console.log(candies.jellyBeans ?? gummyBeras);
  console.log(candies.licorice ?? gummyBeras);
}
checkCandies();

console.log('================================');

// 3
var shawarma = {
  meat: 2,
  chick: 3,
};

function getShawarma(name, age) {
  if (age > 20) {
    console.log(shawarma.meat);
  } else {
    console.log(shawarma.chick);
  }
}

getShawarma('islam', 30);
getShawarma('ali', 20);

console.log('================================');
// 4
function calculate(num1, num2, operator) {
  if (operator == '+') {
    var result = num1 + num2;
    console.log(result);
  } else if (operator == '-') {
    var result = num1 - num2;
    console.log(result);
  } else if (operator == '*') {
    var result = num1 * num2;
    console.log(result);
  } else if (operator == '/') {
    var result = num1 / num2;
    console.log(result);
  } else operator ?? console.log('Unknown Method, Try Agin');
}

calculate(5, 2, '+');
calculate(5, 2, '-');
calculate(5, 2, '*');
calculate(5, 2, '/');
calculate(5, 2);
console.log('================================');

// 5

console.log('================================');
// 6
console.log('================================');
// 7

function getFee(isMember) {
  return isMember ? '$2' : '$10';
}

console.log(getFee(true));
console.log(getFee(false));
console.log('================================');
