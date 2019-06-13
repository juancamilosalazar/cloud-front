import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTorneosComponent } from './update-torneos.component';

describe('UpdateTorneosComponent', () => {
  let component: UpdateTorneosComponent;
  let fixture: ComponentFixture<UpdateTorneosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTorneosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
