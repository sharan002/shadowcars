import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploadcar } from './uploadcar';

describe('Uploadcar', () => {
  let component: Uploadcar;
  let fixture: ComponentFixture<Uploadcar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploadcar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploadcar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
