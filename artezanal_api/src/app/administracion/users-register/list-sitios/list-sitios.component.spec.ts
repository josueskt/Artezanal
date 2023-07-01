/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListSitiosComponent } from './list-sitios.component';

describe('ListSitiosComponent', () => {
  let component: ListSitiosComponent;
  let fixture: ComponentFixture<ListSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
