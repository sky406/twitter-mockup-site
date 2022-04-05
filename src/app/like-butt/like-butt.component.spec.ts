import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtComponent } from './like-butt.component';

describe('LikeButtComponent', () => {
  let component: LikeButtComponent;
  let fixture: ComponentFixture<LikeButtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeButtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeButtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
