let fox_btn = document.getElementById('fox_btn');
let dog_btn = document.getElementById('dog_btn');
let fox_result = document.getElementById('fox_result');
let dog_result = document.getElementById('dog_result');

function getRandomDogs() {
  fetch('https://random.dog/woof.json')
  .then((response) => response.json())
  .then(data => {
      if(data.url.includes('.mp4')) {
        getRandomDogs();
      } else {
        dog_result.innerHTML = `<img src=${data.url}>`
      }})
}

dog_btn.addEventListener('click', getRandomDogs);