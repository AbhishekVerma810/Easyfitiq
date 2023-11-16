import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientHomepagePage } from './client-homepage.page';

describe('ClientHomepagePage', () => {
  let component: ClientHomepagePage;
  let fixture: ComponentFixture<ClientHomepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
