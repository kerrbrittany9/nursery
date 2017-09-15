import Moment from "moment";

class Plant {
  constructor(name, water) {
    this.name = name;
    this.water = water;
    this.timeBirth= new Moment();
    this.timeSinceBirth = this.setTimeSinceBirth();
  }

  setTimeSinceBirth() {
    this.timeSinceBirth = this.timeBirth.fromNow(true);
  }


}
export default Plant;
