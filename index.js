function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  const newDrivers = [];
  drivers.map(driver => {
    const aDriver = {};
    let first = (driver.split(' ')[0]);
    aDriver["firstName"] = `${first}`
    let last = (driver.split(' ')[1]);
    aDriver["lastName"] = `${last}`
    newDrivers.push(aDriver);
  })
  return newDrivers;
}

function attributesToPhrase(drivers) {
  return drivers.map(driver =>
    `${driver.name}` + ' is from ' + `${driver.hometown}`
  )
}
