// Code your solution in this file.
function lowerCaseDrivers (collection, name) {
  const newArr = []

  for (const driver of collection) {
    newArr.push(driver.toLowerCase());
  }
  return newArr
}

function nameToAttributes(collection) {
  const newArr = []

  for (const driver of collection) {
    newArr.push({
      firstName: driver.split(" ")[0],
      lastName: driver.split(" ")[1]
    })
  }
  return newArr
}

function attributesToPhrase(collection) {
  const newArr = []

  for (const driver of collection) {
    newArr.push(
      `${driver.name} is from ${driver.hometown}`)
  }
  return newArr
}
