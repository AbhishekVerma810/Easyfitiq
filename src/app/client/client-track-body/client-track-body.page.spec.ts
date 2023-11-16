import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientTrackBodyPage } from './client-track-body.page';

describe('ClientTrackBodyPage', () => {
  let component: ClientTrackBodyPage;
  let fixture: ComponentFixture<ClientTrackBodyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientTrackBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
