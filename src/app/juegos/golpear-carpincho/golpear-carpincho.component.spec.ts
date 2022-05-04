import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolpearCarpinchoComponent } from './golpear-carpincho.component';

describe('GolpearCarpinchoComponent', () => {
  let component: GolpearCarpinchoComponent;
  let fixture: ComponentFixture<GolpearCarpinchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolpearCarpinchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolpearCarpinchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
