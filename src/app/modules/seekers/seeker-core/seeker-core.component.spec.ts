import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerCoreComponent } from './seeker-core.component';

describe('SeekerCoreComponent', () => {
  let component: SeekerCoreComponent;
  let fixture: ComponentFixture<SeekerCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
