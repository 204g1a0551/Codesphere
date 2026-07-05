import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDoubt } from './post-doubt';

describe('PostDoubt', () => {
  let component: PostDoubt;
  let fixture: ComponentFixture<PostDoubt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDoubt],
    }).compileComponents();

    fixture = TestBed.createComponent(PostDoubt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
