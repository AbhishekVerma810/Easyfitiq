import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainermoreinformationPage } from './trainermoreinformation.page';

describe('TrainermoreinformationPage', () => {
  let component: TrainermoreinformationPage;
  let fixture: ComponentFixture<TrainermoreinformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainermoreinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
