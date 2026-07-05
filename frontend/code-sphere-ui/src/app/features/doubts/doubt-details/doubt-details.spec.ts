import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtDetails } from './doubt-details';

describe('DoubtDetails', () => {
  let component: DoubtDetails;
  let fixture: ComponentFixture<DoubtDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubtDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(DoubtDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
