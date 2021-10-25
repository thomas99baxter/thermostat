const Thermostat = require("../lib/thermostat.js");

describe("Thermostat", () => {
  it("starts at 20 degrees", () => {
    let test_thermostat = new Thermostat();
    expect(test_thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("You can increase the temperature with an up function", () => {
    let test_thermostat = new Thermostat();
    test_thermostat.up();
    expect(test_thermostat.getCurrentTemperature()).toEqual(21);
  });
});
