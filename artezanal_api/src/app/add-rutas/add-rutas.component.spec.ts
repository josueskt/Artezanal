/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddRutasComponent } from './add-rutas.component';

describe('AddRutasComponent', () => {
  let component: AddRutasComponent;
  let fixture: ComponentFixture<AddRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
