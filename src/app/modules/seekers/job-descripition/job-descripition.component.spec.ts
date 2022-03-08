import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescripitionComponent } from './job-descripition.component';

describe('JobDescripitionComponent', () => {
  let component: JobDescripitionComponent;
  let fixture: ComponentFixture<JobDescripitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDescripitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescripitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
