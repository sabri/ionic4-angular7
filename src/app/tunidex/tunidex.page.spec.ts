import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunidexPage } from './tunidex.page';

describe('TunidexPage', () => {
  let component: TunidexPage;
  let fixture: ComponentFixture<TunidexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunidexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunidexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
