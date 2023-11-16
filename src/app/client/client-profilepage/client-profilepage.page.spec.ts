import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProfilepagePage } from './client-profilepage.page';

describe('ClientProfilepagePage', () => {
  let component: ClientProfilepagePage;
  let fixture: ComponentFixture<ClientProfilepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientProfilepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
