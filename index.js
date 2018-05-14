function lowerCaseDrivers(arr) {
    return arr.map(function (el) {return el.toLowerCase()});
}

function nameToAttributes(arr) {
  return arr.map(function (el) {
    const newEl = el.split(" ")
    return Object.assign( {}, { firstName: newEl[0], lastName : newEl[1]} );
  });
}

function attributesToPhrase(arr) {
  return arr.map(function (el) {return `${el.name} is from ${el.hometown}`});
}
