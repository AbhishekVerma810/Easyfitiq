import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientloginPage } from './clientlogin.page';

describe('ClientloginPage', () => {
  let component: ClientloginPage;
  let fixture: ComponentFixture<ClientloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
