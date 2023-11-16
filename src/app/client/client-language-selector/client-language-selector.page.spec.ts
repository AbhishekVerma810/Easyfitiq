import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientLanguageSelectorPage } from './client-language-selector.page';

describe('ClientLanguageSelectorPage', () => {
  let component: ClientLanguageSelectorPage;
  let fixture: ComponentFixture<ClientLanguageSelectorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientLanguageSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
