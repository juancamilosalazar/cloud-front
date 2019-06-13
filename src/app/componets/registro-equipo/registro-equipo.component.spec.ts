import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEquipoComponent } from './registro-equipo.component';

describe('RegistroEquipoComponent', () => {
  let component: RegistroEquipoComponent;
  let fixture: ComponentFixture<RegistroEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
