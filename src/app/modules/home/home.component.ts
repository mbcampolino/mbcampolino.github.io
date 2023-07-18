import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  openLink(url:string) {
    if (url.length > 0) {
      window.open(url)
    } else {
      window.alert("Projects page ins't available yet")
    }
  }

}
