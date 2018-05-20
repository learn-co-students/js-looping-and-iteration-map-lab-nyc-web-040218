
function lowerCaseDrivers(drivers) {
  return drivers.map((driver) => (driver.toLowerCase()));
}

function nameToAttributes(drivers) {
  return drivers.map((driver) => ({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}));
}

function attributesToPhrase(drivers) {
  return drivers.map((driverObj) => (`${driverObj.name} is from ${driverObj.hometown}`));
}
