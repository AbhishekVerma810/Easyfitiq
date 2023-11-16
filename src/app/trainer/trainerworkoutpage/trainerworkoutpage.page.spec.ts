import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerworkoutpagePage } from './trainerworkoutpage.page';

describe('TrainerworkoutpagePage', () => {
  let component: TrainerworkoutpagePage;
  let fixture: ComponentFixture<TrainerworkoutpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerworkoutpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
