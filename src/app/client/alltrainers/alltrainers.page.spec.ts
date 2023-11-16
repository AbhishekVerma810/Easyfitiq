import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlltrainersPage } from './alltrainers.page';

describe('AlltrainersPage', () => {
  let component: AlltrainersPage;
  let fixture: ComponentFixture<AlltrainersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlltrainersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
