import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerclientsPage } from './trainerclients.page';

describe('TrainerclientsPage', () => {
  let component: TrainerclientsPage;
  let fixture: ComponentFixture<TrainerclientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerclientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
