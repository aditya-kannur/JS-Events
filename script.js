// Challenge 1

var user = document.getElementById('user');
user.addEventListener('onload', loadname());
function loadname() {
  user.innerHTML = 'Aditya';
}

// Challenge 2

var btn_click = document.getElementById('btn-click');
btn_click = addEventListener('onload', changeColor());
function changeColor() {
  btn_click.style.backgroundColor = 'green';
}

// challenge 3

function makeSentence() {
  var nouning = document.getElementById('noun').value;
  var verbing = document.getElementById('verb').value;
  var adverbing = document.getElementById('adverb').value;
  const sentence = `${nouning} ${verbing} ${adverbing}`;
  var statement = document.getElementById('statement');
  statement.innerText = sentence;
}
var buildButton = document.getElementById('build-button');
buildButton.addEventListener('click', makeSentence);

// Challenge 4.1

document.getElementById('grandparent').addEventListener('click', (e) => {
  console.log('grandparent clicked');
});
document.getElementById('parent').addEventListener('click', (e) => {
  console.log('parent clicked');
});
document.getElementById('child').addEventListener('click', (e) => {
  console.log('child clicked');
});

// Challenge 4.2

document.getElementById('grandparent').addEventListener(
  'click',
  (e) => {
    console.log('grandparent clicked');
  },
  { capture: true }
);
document.getElementById('parent').addEventListener(
  'click',
  (e) => {
    console.log('parent clicked');
  },
  { capture: true }
);
document.getElementById('child').addEventListener(
  'click',
  (e) => {
    console.log('child clicked');
  },
  { capture: true }
);

// Challenge 5

document.getElementById('category').addEventListener('click', (blazers) => {
  console.log(blazers.target.id);
});
