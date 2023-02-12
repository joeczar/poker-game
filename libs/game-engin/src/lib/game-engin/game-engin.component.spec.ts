import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEnginComponent } from './game-engin.component';

describe('GameEnginComponent', () => {
  let component: GameEnginComponent;
  let fixture: ComponentFixture<GameEnginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEnginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameEnginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
