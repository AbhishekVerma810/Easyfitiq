import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientTaskPage } from './client-task.page';

describe('ClientTaskPage', () => {
  let component: ClientTaskPage;
  let fixture: ComponentFixture<ClientTaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
