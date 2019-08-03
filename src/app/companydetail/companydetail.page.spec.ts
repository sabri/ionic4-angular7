import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydetailPage } from './companydetail.page';

describe('CompanydetailPage', () => {
  let component: CompanydetailPage;
  let fixture: ComponentFixture<CompanydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
