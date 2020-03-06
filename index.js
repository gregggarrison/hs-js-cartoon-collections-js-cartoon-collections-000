function dwarfRollCall(dwarves) {
  var newStr = "";
  for(var i = dwarves.length/2; i < dwarves.length; i++) {
    newStr += (i + 1) + ". " + dwarves[i] + " ";
  }
  return newStr;
}
console.log(dwarfRollCall(dwarves)); 

  var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

function summonCaptainPlanet(planeteerCalls) { 
  var capsPCalls = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    var uppPlaneteerCalls = planeteerCalls[i].toUpperCase();
    var upperPunct = uppPlaneteerCalls + "!";
    capsPCalls.push(upperPunct);
  }
  return capsPCalls;
}

var shortWords = ["wind", "fire"];
var assortedWords = ["earth", "wind", "heart", "fire"];

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    }
  }
  return false;
}

var snacks = ["crackers", "gouda", "thyme"];
var soup = ["tomato soup", "cheddar", "oyster crackers", "gouda"];
var ingredients = ["garlic", "rosemary", "bread"];

function findTheCheese(food) {
  for(var i = 0; i < food.length; i++) {
    if(food[i] === 'cheddar' || food[i] === 'gouda' || food[i] === 'camembert' || food[i] === 'swiss') {
      return food[i];
    }
  }
  return 'no cheese!';
}

function wordsWB (words) {
  let arrB = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i].startsWith('b')) {
        arrB.push[word[i]]

  }
  }
  
  return arrB;
}

