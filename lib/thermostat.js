class Thermostat {
  constructor() {
    this.minimumTemperature = 10;
    this.currentTemperature = 20;
    this.powerSavingMode = true;
    this.powerSaveOnMaxTemp = 25;
    this.powerSaveOffMaxTemp = 60;
  }

  getCurrentTemperature() {
    return this.currentTemperature;
  }

  getPowerSavingModeStatus() {
    return this.powerSavingMode;
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

  togglePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
  }

  resetTemperature() {
    this.currentTemperature = 20;
  }

  getCurrentUsage() {
    if (this.currentTemperature < 18) {
      return "low-usage";
    } else if (this.currentTemperature < 26) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
