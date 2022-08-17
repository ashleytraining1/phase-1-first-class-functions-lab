// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    
    const firstTwoDrivers = drivers.slice(0,2)

    console.log(firstTwoDrivers);

    return firstTwoDrivers;
}
const returnLastTwoDrivers = function (drivers) {

    const lastTwoDrivers = drivers.slice(2,4)

    console.log(lastTwoDrivers);

    return lastTwoDrivers;

}

let selectingDrivers = []

selectingDrivers.push(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

const createFareMultiplier = (number) => {

    return function multiplier (fare) {

        return fare * number
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers,returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}