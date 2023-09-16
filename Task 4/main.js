// 1
var divv = document.createElement('div');
var para = document.createElement('p');
var span = document.createElement('span');
var link = document.createElement('a');

divv.style.backgroundColor = 'red';
para.style.backgroundColor = 'blue';
span.style.backgroundColor = 'green';
link.style.backgroundColor = 'black';

document.body.appendChild(divv);
divv.appendChild(para);
para.appendChild(span);
document.body.appendChild(link);
// document.body.append(divv, para, span, link);

// 2
var form = document.createElement('form');
var inputText = document.createElement('input');
var inputNumber = document.createElement('input');
var inputTextArea = document.createElement('textarea');
var inputSubmit = document.createElement('input');
document.body.appendChild(form);
inputText.setAttribute('type', 'text');
inputNumber.setAttribute('type', 'number');
inputSubmit.setAttribute('type', 'submit');
form.appendChild(inputText);
form.appendChild(inputNumber);
form.appendChild(inputTextArea);
form.appendChild(inputSubmit);

inputTextArea.onfocus = function () {
  window.location.reload();
};

// 3
document.querySelector('.btn').onclick = function () {
  let newEle = document.createElement('div');
  newEle.setAttribute('class', 'div-js');
  newEle.innerText = 'Iam created from js file';
  document.body.appendChild(newEle);
};
