import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingColumnsComponent } from './missing-columns.component';

describe('MissingColumnsComponent', () => {
  let component: MissingColumnsComponent;
  let fixture: ComponentFixture<MissingColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
