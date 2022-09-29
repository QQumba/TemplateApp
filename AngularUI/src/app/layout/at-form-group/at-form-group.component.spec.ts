import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormGroupComponent } from './at-form-group.component';

describe('AtFormGroupComponent', () => {
  let component: AtFormGroupComponent;
  let fixture: ComponentFixture<AtFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtFormGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
