import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyButtonsComponent } from './survey-buttons.component';

describe('SurveyButtonsComponent', () => {
  let component: SurveyButtonsComponent;
  let fixture: ComponentFixture<SurveyButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
