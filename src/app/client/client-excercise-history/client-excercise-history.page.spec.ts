import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientExcerciseHistoryPage } from './client-excercise-history.page';

describe('ClientExcerciseHistoryPage', () => {
  let component: ClientExcerciseHistoryPage;
  let fixture: ComponentFixture<ClientExcerciseHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientExcerciseHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
