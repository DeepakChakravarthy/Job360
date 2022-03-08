import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerCorePageComponent } from './seeker-core-page.component';

describe('SeekerCorePageComponent', () => {
  let component: SeekerCorePageComponent;
  let fixture: ComponentFixture<SeekerCorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeekerCorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerCorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
