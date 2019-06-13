import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEquiposComponent } from './update-equipos.component';

describe('UpdateEquiposComponent', () => {
  let component: UpdateEquiposComponent;
  let fixture: ComponentFixture<UpdateEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
