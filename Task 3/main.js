// 1

let n = 0;

while (n <= 5) {
  console.log(n);
  n++;
}

console.log('================================');
// 2
let k = 0;

do {
  k++;
  console.log(k);
} while (k <= 5);

console.log('================================');
// 3
let obj = {
  key: 'value',
  name: 'za3bolla',
};

if (obj.hasOwnProperty('age')) {
  console.log(obj.age);
} else {
  console.log('mfesh ya sa7by');
}

console.log('================================');

let arr = ['ahmed', ' ali', ' selime', ' islam ', ' hussien'];
// console.log(arr.sort());

let risylt = arr.map(function (e) {
  return e.trim();
});
console.log(risylt.sort());
