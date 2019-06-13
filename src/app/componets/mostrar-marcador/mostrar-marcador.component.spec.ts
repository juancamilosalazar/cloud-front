import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMarcadorComponent } from './mostrar-marcador.component';

describe('MostrarMarcadorComponent', () => {
  let component: MostrarMarcadorComponent;
  let fixture: ComponentFixture<MostrarMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
