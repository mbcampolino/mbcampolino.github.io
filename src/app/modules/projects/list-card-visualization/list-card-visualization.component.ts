import { Component, Input } from '@angular/core';
import { ContentCardVisualization } from 'src/app/models/cardlist.model';

@Component({
  selector: 'app-list-card-visualization',
  templateUrl: './list-card-visualization.component.html',
  styleUrls: ['./list-card-visualization.component.scss']
})
export class ListCardVisualizationComponent {

  @Input() data: ContentCardVisualization = {header: "", cards: []}

}
