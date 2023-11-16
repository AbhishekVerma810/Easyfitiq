import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainertasksPage } from './trainertasks.page';

describe('TrainertasksPage', () => {
  let component: TrainertasksPage;
  let fixture: ComponentFixture<TrainertasksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrainertasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
