// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newDrivers = []
  for (elem in drivers){
    newDrivers.push(drivers[elem].toLowerCase())
  }
  return newDrivers
}

function nameToAttributes(list) {
  return list.map(function(driver){
    const fName = driver.split(" ")[0]
    const lName = driver.split(" ")[1]
    return {firstName: fName, lastName: lName}
  })
}
function attributesToPhrase(list) {
  return list.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })

}
