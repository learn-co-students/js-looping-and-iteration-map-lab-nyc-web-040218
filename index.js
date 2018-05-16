// Code your solution in this file.

function lowerCaseDrivers(array) {
  newArr = []
  array.map(function(name) {
    newArr.push(name.toLowerCase())
  })
  return newArr
}

function nameToAttributes(array) {
  let newArr = []
  array.map(function(name) {
    obj = {}
    obj["firstName"] = name.split(' ')[0]
    obj["lastName"] = name.split(' ')[1]
    newArr.push(obj)
  })
  return newArr
}

function attributesToPhrase(array) {
  let newArr = []
  array.map(function(driverObj) {
    newArr.push(`${driverObj.name} is from ${driverObj.hometown}`)
  })
  return newArr
}
