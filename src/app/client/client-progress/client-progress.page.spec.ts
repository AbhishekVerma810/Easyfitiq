import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProgressPage } from './client-progress.page';

describe('ClientProgressPage', () => {
  let component: ClientProgressPage;
  let fixture: ComponentFixture<ClientProgressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
