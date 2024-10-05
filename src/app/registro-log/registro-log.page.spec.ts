import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroLogPage } from './registro-log.page';

describe('RegistroLogPage', () => {
  let component: RegistroLogPage;
  let fixture: ComponentFixture<RegistroLogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
