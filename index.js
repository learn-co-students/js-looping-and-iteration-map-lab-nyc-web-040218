// Code your solution in this file.
function lowerCaseDrivers(array){
  return array.map(function(driver){
    return driver.toLowerCase();
  })
}

function nameToAttributes(array){
  return array.map(function(driver){
    const firstDriverName = driver.split(" ")[0];
    const lastDriverName = driver.split(" ")[1];
    return {firstName: firstDriverName, lastName: lastDriverName};
  });
}

function attributesToPhrase(array){
  return array.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
