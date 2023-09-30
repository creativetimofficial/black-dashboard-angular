import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignComponent } from './campaign.component';

describe('CampaignComponent', () => {
  let component: CampaignComponent;
  let fixture: ComponentFixture<CampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
