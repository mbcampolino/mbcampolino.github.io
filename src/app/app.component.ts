import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'landing-page';

  openLink(url:string) {
    if (url.length > 0) {
      window.open(url)
    } else {
      window.alert("Projects page ins't available yet")
    }
  }

}
