// Code your solution here
// findMatching - returns drivers whose names match the provided string, case insensitive
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// fuzzyMatch - returns drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// matchName - returns drivers whose names match the provided string argument
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}