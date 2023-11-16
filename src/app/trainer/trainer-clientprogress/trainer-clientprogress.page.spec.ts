import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerClientprogressPage } from './trainer-clientprogress.page';

describe('TrainerClientprogressPage', () => {
  let component: TrainerClientprogressPage;
  let fixture: ComponentFixture<TrainerClientprogressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerClientprogressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
