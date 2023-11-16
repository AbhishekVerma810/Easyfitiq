import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientMoreinformationPage } from './client-moreinformation.page';

describe('ClientMoreinformationPage', () => {
  let component: ClientMoreinformationPage;
  let fixture: ComponentFixture<ClientMoreinformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientMoreinformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
