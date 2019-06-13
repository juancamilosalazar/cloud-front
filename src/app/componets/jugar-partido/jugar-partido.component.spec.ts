import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugarPartidoComponent } from './jugar-partido.component';

describe('JugarPartidoComponent', () => {
  let component: JugarPartidoComponent;
  let fixture: ComponentFixture<JugarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
