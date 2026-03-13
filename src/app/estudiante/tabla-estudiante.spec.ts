import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablaestudiante } from './tabla-estudiante';

describe('Tablaestudiante', () => {
  let component: Tablaestudiante;
  let fixture: ComponentFixture<Tablaestudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablaestudiante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablaestudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
