import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {

  @Input() vertical = '';
  @Input() horizontal = '';
  @Input() size = '';

  @Input() impar = false

}
