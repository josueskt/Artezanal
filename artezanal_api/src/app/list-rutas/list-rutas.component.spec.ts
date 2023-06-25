/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListRutasComponent } from './list-rutas.component';

describe('ListRutasComponent', () => {
  let component: ListRutasComponent;
  let fixture: ComponentFixture<ListRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
