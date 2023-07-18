import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardVisualizationComponent } from './list-card-visualization.component';

describe('ListCardVisualizationComponent', () => {
  let component: ListCardVisualizationComponent;
  let fixture: ComponentFixture<ListCardVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCardVisualizationComponent]
    });
    fixture = TestBed.createComponent(ListCardVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
