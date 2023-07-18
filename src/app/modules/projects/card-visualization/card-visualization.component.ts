import { Component, Input } from '@angular/core';
import { CardVisualization } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-visualization',
  templateUrl: './card-visualization.component.html',
  styleUrls: ['./card-visualization.component.scss']
})
export class CardVisualizationComponent {

  @Input() card: CardVisualization = {
    title: "",
    description: "",
    imgUrl: "",
    action: ""
  }

  open(url: string) {
    window.open(url)
  }

}
