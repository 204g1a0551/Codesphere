import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerEditor } from './answer-editor';

describe('AnswerEditor', () => {
  let component: AnswerEditor;
  let fixture: ComponentFixture<AnswerEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
