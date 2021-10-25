const Thermostat = require("../lib/thermostat.js");

describe("Thermostat", () => {
  let test_thermostat;
  beforeEach(() => {
    test_thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(test_thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("You can increase the temperature with an up function", () => {
    test_thermostat.up();
    expect(test_thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("You can increase the temperature with an up function", () => {
    test_thermostat.down();
    expect(test_thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("The temperature will not decrease below 10 degrees", () => {
    for (let i = 0; i < 10; i++) {
      test_thermostat.down();
    }
    expect(test_thermostat.getCurrentTemperature()).toEqual(10);
    test_thermostat.down();
    expect(test_thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("Temperature should not go over 25 on power saving mode", () => {
    for (let i = 0; i < 5; i++) {
      test_thermostat.up();
    }
    expect(test_thermostat.getCurrentTemperature()).toEqual(25);
    test_thermostat.up();
    expect(test_thermostat.getCurrentTemperature()).toEqual(25);
  });

  it("Max temp is 32 without power saving mode", () => {
    test_thermostat.powerSaveOff();
    for (let i = 0; i < 12; i++) {
      test_thermostat.up();
    }
    expect(test_thermostat.getCurrentTemperature()).toEqual(32);
    test_thermostat.up();
    expect(test_thermostat.getCurrentTemperature()).toEqual(32);
  });
});
