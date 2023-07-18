import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCardVisualizationComponent } from './list-card-visualization/list-card-visualization.component';
import { CardVisualizationComponent } from './card-visualization/card-visualization.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    CardVisualizationComponent,
    ListCardVisualizationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ]
})
export class ProjectsModule { }
