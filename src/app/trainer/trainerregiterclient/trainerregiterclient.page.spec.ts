import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerregiterclientPage } from './trainerregiterclient.page';

describe('TrainerregiterclientPage', () => {
  let component: TrainerregiterclientPage;
  let fixture: ComponentFixture<TrainerregiterclientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerregiterclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
