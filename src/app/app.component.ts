import { Component } from '@angular/core';

export interface StartInterface {
  size: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stars: StartInterface[] = []

  title = 'landing-page';

  constructor() {
  }

  ngAfterViewInit() {
    for (let index = 0; index < 50; index++) {
      const element = {size: 1}
      this.stars.push(element)
    }
  }

  ngOnInit() {

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

  openLink(url:string) {
    if (url.length > 0) {
      window.open(url)
    } else {
      window.alert("Projects page ins't available yet")
    }
  }

}
