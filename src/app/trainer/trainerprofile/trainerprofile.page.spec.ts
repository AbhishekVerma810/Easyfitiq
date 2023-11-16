import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerprofilePage } from './trainerprofile.page';

describe('TrainerprofilePage', () => {
  let component: TrainerprofilePage;
  let fixture: ComponentFixture<TrainerprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
