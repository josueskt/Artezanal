import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRutsComponent } from './all-ruts.component';

describe('AllRutsComponent', () => {
  let component: AllRutsComponent;
  let fixture: ComponentFixture<AllRutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRutsComponent]
    });
    fixture = TestBed.createComponent(AllRutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
