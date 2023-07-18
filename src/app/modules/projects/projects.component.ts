import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContentCardVisualization } from 'src/app/models/cardlist.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  contentList: ContentCardVisualization[] = []

  constructor(private http : HttpClient) {
  this.http.get<ContentCardVisualization[]>("./../../../assets/projects.json").subscribe(resultado =>
      {
        console.log(resultado)
        this.contentList = resultado
      }
    );
  }

}
