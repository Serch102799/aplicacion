import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAlimentoPage } from './registro-alimento.page';

describe('RegistroAlimentoPage', () => {
  let component: RegistroAlimentoPage;
  let fixture: ComponentFixture<RegistroAlimentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
