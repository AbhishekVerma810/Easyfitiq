import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassifiedTrainersPage } from './classified-trainers.page';

describe('ClassifiedTrainersPage', () => {
  let component: ClassifiedTrainersPage;
  let fixture: ComponentFixture<ClassifiedTrainersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClassifiedTrainersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
