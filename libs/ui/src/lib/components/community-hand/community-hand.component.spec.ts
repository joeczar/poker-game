import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHandComponent } from './community-hand.component';

describe('CommunityHandComponent', () => {
  let component: CommunityHandComponent;
  let fixture: ComponentFixture<CommunityHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityHandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
