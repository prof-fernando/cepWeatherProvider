import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoPage } from './previsao.page';

describe('PrevisaoPage', () => {
  let component: PrevisaoPage;
  let fixture: ComponentFixture<PrevisaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
