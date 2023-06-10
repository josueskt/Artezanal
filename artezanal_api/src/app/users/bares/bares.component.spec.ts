/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaresComponent } from './bares.component';

describe('BaresComponent', () => {
  let component: BaresComponent;
  let fixture: ComponentFixture<BaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
