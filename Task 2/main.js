// 1
console.log('===============1=================');
function getDayType(day) {
  switch (day.toLowerCase()) {
    case 'sunday':
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
      return 'Weekday';

    case 'friday':
    case 'saturday':
      return 'Weekend';

    default:
      return 'Invalid day';
  }
}
console.log(getDayType('friday'));
console.log(getDayType('Saturday'));
console.log(getDayType('SUNDAY'));
console.log(getDayType('monday'));
console.log(getDayType('tuesday'));
console.log(getDayType('wednesday'));
console.log(getDayType('thursday'));
console.log(getDayType('invalid'));
console.log('================2================');
// 2

var developer = {
  name: 'islam nashaat',
  age: 30.9,
  gender: 'male',
};

var devName = developer.name.toUpperCase();
var devAge = parseInt(developer.age);
var devGender = developer.gender;
console.log(`Developer Name is: ${devName}`);
console.log(`Developer Age is: ${devAge}`);
console.log(`Developer Gender is: ${devGender}`);
console.log('================3================');

// 3
var shoppingCart = {
  mobile: 1,
  items: {
    apple: 5,
    banana: 3,
  },
  money: {
    dollars: 900,
    ryal: 1500,
    egyptianPound: 1000,
  },
};

console.log(shoppingCart.items.apple + ' Apples');
console.log(shoppingCart.items.banana + ' Bananas');
console.log(shoppingCart.mobile);
console.log(`${shoppingCart.money.dollars}$`);
console.log(`${shoppingCart.money.ryal}Sar`);
console.log(`${shoppingCart.money.egyptianPound}LE`);
console.log('================4================');

// 4
console.log('1. Object Literals');
console.log('var objectx{\nfirstName:"Ali"\nlastName:"Nashaat"\n}');
console.log(' Ali Nashaat');
console.log('2. Object.create Method');
console.log('var newObject = Object.create(objectx)');
console.log("newObject.firstName = 'Islam'");
var objectx = {
  firstName: 'ali',
  lastName: 'Nashaat',
};
var newObject = Object.create(objectx);
newObject.firstName = 'Islam';
var fullName = `${newObject.firstName} ${newObject.lastName}`;
console.log(fullName);
console.log('================5================');
// 5
const sentence = 'The quick brown fox jumps over the lazy dog';
console.log(sentence.includes('fox'));

console.log('=================6===============');
// 6
const numbers = [1, 2, 3, 4, 5];
numbers.map((number) => {
  console.log(number * 10);
});
// console.log(numbers.filter((number) => number >= 4));

var numberFilter = numbers.filter(function (number) {
  return number >= 4;
});
console.log(numberFilter);
console.log('=================END===============');
