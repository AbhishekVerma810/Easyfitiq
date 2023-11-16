import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerhomePage } from './trainerhome.page';

describe('TrainerhomePage', () => {
  let component: TrainerhomePage;
  let fixture: ComponentFixture<TrainerhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
