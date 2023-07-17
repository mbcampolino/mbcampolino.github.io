import { Component, Input } from '@angular/core';

export interface StartInterface {
  size: number
}

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  hour:number = 3//new Date().getHours()

  currentClass = "night"

  stars: StartInterface[] = []

  constructor() {
    this.themed()
    //this.test()
  }

  test() {
    setInterval(() => {
      this.hour += 1
      if (this.hour > 23) {
        this.hour = 0
      }
      this.themed()
      }, 1000);
  }

  themed() {

    if (this.hour >= 8 && this.hour < 18) {
      this.currentClass = "day"
    } else {
      this.currentClass = "night"
      this.initStars()
    }

    if (this.hour == 3) {
      this.currentClass = this.currentClass + " threeAM"
    }

    if (this.hour == 4) {
      this.currentClass = this.currentClass + " fourAM"
    }

    if (this.hour == 5) {

      this.currentClass = this.currentClass + " fiveAM"
    }

    if (this.hour == 6) {
      this.currentClass = this.currentClass + " sixAM"
    }

    if (this.hour == 7) {
      this.currentClass = this.currentClass + " sevenAM"
    }

    if (this.hour == 8) {
      this.currentClass = this.currentClass + " eightAM"
    }

    if (this.hour == 9) {
      this.currentClass = this.currentClass + " nineAM"
    }

    if (this.hour == 15) {
      this.currentClass = this.currentClass + " fifteen"
    }

    if (this.hour == 16) {
      this.currentClass = this.currentClass + " sixteen"
    }

    if (this.hour == 17) {
      this.currentClass = this.currentClass + " seventeen"
    }

    if (this.hour == 18) {
      this.currentClass = this.currentClass + " eighteen"
    }

    console.log(this.hour)
  }


  /// stars

  initStars() {

    this.stars.splice(0)

    if (this.hour < 7 || this.hour > 18) {
      for (let index = 0; index < 50; index++) {
        const element = {size: 1}
        this.stars.push(element)
      }
    }
  }

  random_x() {
    let randNum = Math.floor(Math.random() * window.innerWidth) + 1;
    return `${randNum}px`;
  }

  random_y() {
    let randNum = Math.floor(Math.random() * window.innerHeight) + 1;
    return `${randNum}px`;
  }

  random_size(number:number) {
    return (Math.random() * number) + 'px'
  }

  random_par() {
    var value = (Math.random() * 10) % 2
    if (value & 1) {
      return true
    }
    return false
  }

}
