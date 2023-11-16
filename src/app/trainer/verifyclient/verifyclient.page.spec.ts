import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyclientPage } from './verifyclient.page';

describe('VerifyclientPage', () => {
  let component: VerifyclientPage;
  let fixture: ComponentFixture<VerifyclientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifyclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
