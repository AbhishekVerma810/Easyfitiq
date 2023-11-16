import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerprogressPage } from './trainerprogress.page';

describe('TrainerprogressPage', () => {
  let component: TrainerprogressPage;
  let fixture: ComponentFixture<TrainerprogressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainerprogressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
