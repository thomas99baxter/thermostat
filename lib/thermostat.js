class Thermostat {
  constructor() {
    this.minimumTemperature = 10;
    this.currentTemperature = 20;
    this.powerSavingMode = true;
    this.powerSaveOnMaxTemp = 25;
    this.powerSaveOffMaxTemp = 32;
  }

  getCurrentTemperature() {
    return this.currentTemperature;
  }

  up() {
    if (this.powerSavingMode) {
      this.#increaseTemperature(this.powerSaveOnMaxTemp);
    } else {
      this.#increaseTemperature(this.powerSaveOffMaxTemp);
    }
  }

  #increaseTemperature(maxTemp) {
    if (this.currentTemperature < maxTemp) {
      this.currentTemperature += 1;
    }
  }

  down() {
    if (this.currentTemperature > this.minimumTemperature) {
      this.currentTemperature -= 1;
    }
  }

  powerSaveOff() {
    this.powerSavingMode = false;
  }

  resetTemperature() {
    this.currentTemperature = 20;
  }
}

module.exports = Thermostat;
