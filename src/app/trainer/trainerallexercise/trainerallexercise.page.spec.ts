import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerallexercisePage } from './trainerallexercise.page';

describe('TrainerallexercisePage', () => {
  let component: TrainerallexercisePage;
  let fixture: ComponentFixture<TrainerallexercisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerallexercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
