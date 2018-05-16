function lowerCaseDrivers(drivers) {
    const newArray = drivers.map(function (driver) {
        return driver.toLowerCase();
    });
    return newArray;
}

function nameToAttributes(drivers) {
    const newArray = drivers.map(function (name){
        return Object.assign({
            firstName: name.split(" ")[0],
            lastName: name.split(" ")[1]
        })
    })
    return newArray;
}

function attributesToPhrase(drivers){
    const newArray = drivers.map(function (driver){
        return `${driver.name} is from ${driver.hometown}`;
    })
    return newArray;
}