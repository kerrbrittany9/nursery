import Moment from "moment";

class Plant {
  constructor(name, water) {
    this.name = name;
    this.water = water;
    this.timeWatered = new Date();
  }

}
export default Plant;
