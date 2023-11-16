import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientForgotpasswordPage } from './client-forgotpassword.page';

describe('ClientForgotpasswordPage', () => {
  let component: ClientForgotpasswordPage;
  let fixture: ComponentFixture<ClientForgotpasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientForgotpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
