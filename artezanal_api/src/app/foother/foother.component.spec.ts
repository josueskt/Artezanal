/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FootherComponent } from './foother.component';

describe('FootherComponent', () => {
  let component: FootherComponent;
  let fixture: ComponentFixture<FootherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
