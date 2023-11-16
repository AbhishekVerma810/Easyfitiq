import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientViewBodytrackPage } from './client-view-bodytrack.page';

describe('ClientViewBodytrackPage', () => {
  let component: ClientViewBodytrackPage;
  let fixture: ComponentFixture<ClientViewBodytrackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientViewBodytrackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
