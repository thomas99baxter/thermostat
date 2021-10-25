class Thermostat {
  constructor() {
    this.minimum_temperature = 10;
    this.current_temperature = 20;
    this.power_saving_mode = true;
  }

  getCurrentTemperature() {
    return this.current_temperature;
  }

  up() {
    if(this.current_temperature < 25) {
      this.current_temperature += 1;
    }
  }

  down() {
    if(this.current_temperature > 10) {
      this.current_temperature -= 1;
    }
  }
}

module.exports = Thermostat;
