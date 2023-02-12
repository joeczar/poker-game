import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { UiComponent } from '@joeczar/poker-ui';
import { GameEnginComponent } from '@joeczar/poker-game-engine';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent, GameEnginComponent],
  selector: 'poker-game-root',
  template: `
    <h1 class="text-xl bg-indigo-500">Poker Root</h1>
    <poker-game-ui></poker-game-ui>
    <poker-game-game-engine></poker-game-game-engine>
  `,
  styles: [],
})
export class AppComponent {
  title = 'poker-game';
}
