'use strict'

class Time extends Date {
  constructor(props) {
    super(props);
    this.monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  getMonthName() {
    let now = new Date();
    return this.monthList[now.getMonth()];
  }
}

module.exports = new Time();
