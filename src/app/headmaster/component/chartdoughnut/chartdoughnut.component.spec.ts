import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdoughnutComponent } from './chartdoughnut.component';

describe('ChartdoughnutComponent', () => {
  let component: ChartdoughnutComponent;
  let fixture: ComponentFixture<ChartdoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdoughnutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
