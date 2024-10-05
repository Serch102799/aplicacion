import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroBebidaPage } from './registro-bebida.page';

describe('RegistroBebidaPage', () => {
  let component: RegistroBebidaPage;
  let fixture: ComponentFixture<RegistroBebidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
