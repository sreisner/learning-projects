function getRandomArrayItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

function updatePageWithGeneratedGamerTag() {
  var randomAdjective = getRandomArrayItem(adjectives);
  var randomNoun = getRandomArrayItem(nouns);

  var nameElement = document.getElementById('name');
  nameElement.innerText = randomAdjective + randomNoun;
}

var adjectives = ['Candied', 'Vacant', 'Jumping'];
var nouns = ['Narwhal', 'Bacon', 'Coward'];

var button = document.getElementById('generate-button');
button.addEventListener('click', updatePageWithGeneratedGamerTag);
