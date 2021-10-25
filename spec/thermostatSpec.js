const Thermostat = require("../lib/thermostat.js");

describe("Thermostat", () => {
  it("starts at 20 degrees", () => {
    let test_thermostat = new Thermostat();
    expect(test_thermostat.getCurrentTemperature()).toEqual(20);
  });
});
