import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerlanguagePage } from './trainerlanguage.page';

describe('TrainerlanguagePage', () => {
  let component: TrainerlanguagePage;
  let fixture: ComponentFixture<TrainerlanguagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerlanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
