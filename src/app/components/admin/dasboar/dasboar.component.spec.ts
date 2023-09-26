import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboarComponent } from './dasboar.component';

describe('DasboarComponent', () => {
  let component: DasboarComponent;
  let fixture: ComponentFixture<DasboarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboarComponent]
    });
    fixture = TestBed.createComponent(DasboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
