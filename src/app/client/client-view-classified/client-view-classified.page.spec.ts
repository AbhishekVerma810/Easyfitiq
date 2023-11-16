import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientViewClassifiedPage } from './client-view-classified.page';

describe('ClientViewClassifiedPage', () => {
  let component: ClientViewClassifiedPage;
  let fixture: ComponentFixture<ClientViewClassifiedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientViewClassifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
