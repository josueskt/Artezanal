/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddSitiosComponent } from './add-sitios.component';

describe('AddSitiosComponent', () => {
  let component: AddSitiosComponent;
  let fixture: ComponentFixture<AddSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
