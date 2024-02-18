//input ['Angela', 'Tina', 'Bob', 'Chole','Mike']

function whoPaying(name) {
  var numberOfPeople = name.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = name[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}

const lunchMessage = whoPaying(["Angela", "Tina", "Bob", "Chole", "Mike"]);
console.log(lunchMessage);
