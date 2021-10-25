class Thermostat {
  constructor() {
    this.current_temperature = 20;
  }

  getCurrentTemperature() {
    return this.current_temperature;
  }

  up() {
    this.current_temperature += 1;
  }
}

module.exports = Thermostat;
