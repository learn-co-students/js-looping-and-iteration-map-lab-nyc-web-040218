// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) { 
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    const driverNameSplit = driver.split(" ");
    return Object.assign({}, { firstName: driverNameSplit[0], lastName: driverNameSplit[1] });
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) { 
    return `${driver.name} is from ${driver.hometown}`;
  });
}

