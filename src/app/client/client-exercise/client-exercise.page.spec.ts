import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientExercisePage } from './client-exercise.page';

describe('ClientExercisePage', () => {
  let component: ClientExercisePage;
  let fixture: ComponentFixture<ClientExercisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
