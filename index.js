// Code your solution in this file.

function lowerCaseDrivers(a) {
  return a.map(driver => driver.toLowerCase())
}

function nameToAttributes(a) {
  return a.map(function (driver){
    driverFirst = driver.split(' ')[0];
    driverSecond = driver.split(' ')[1];
    return {firstName: driverFirst, lastName: driverSecond};
  })
}

function attributesToPhrase(a) {
  return a.map(function (driver) {

    return `${driver.name} is from ${driver.hometown}`
  })
}
