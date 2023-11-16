import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraineraccountPage } from './traineraccount.page';

describe('TraineraccountPage', () => {
  let component: TraineraccountPage;
  let fixture: ComponentFixture<TraineraccountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraineraccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
