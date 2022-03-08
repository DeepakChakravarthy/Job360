import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCorePageComponent } from './company-core-page.component';

describe('CompanyCorePageComponent', () => {
  let component: CompanyCorePageComponent;
  let fixture: ComponentFixture<CompanyCorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyCorePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
