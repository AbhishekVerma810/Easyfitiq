import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotepasswordPage } from './forgotepassword.page';

describe('ForgotepasswordPage', () => {
  let component: ForgotepasswordPage;
  let fixture: ComponentFixture<ForgotepasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgotepasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
