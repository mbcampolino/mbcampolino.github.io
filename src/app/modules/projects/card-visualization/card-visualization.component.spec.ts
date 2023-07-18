import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisualizationComponent } from './card-visualization.component';

describe('CardVisualizationComponent', () => {
  let component: CardVisualizationComponent;
  let fixture: ComponentFixture<CardVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVisualizationComponent]
    });
    fixture = TestBed.createComponent(CardVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
