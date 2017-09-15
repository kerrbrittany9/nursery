import Moment from "moment";

class Plant {
  constructor(name, water) {
    this.name = name;
    this.water = water;
    this.timeWatered= new Moment();
    this.timeSinceWatered = this.setTimeSinceWatered();
  }

  setTimeSinceWatered() {
    this.timeSinceWatered = this.timeWatered.fromNow(true);
  }

}
export default Plant;
