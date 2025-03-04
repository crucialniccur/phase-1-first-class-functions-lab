// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  //   let sliced = drivers.slice(0, 2);
  return drivers.slice(0, 2);
  //   return sliced;
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}
