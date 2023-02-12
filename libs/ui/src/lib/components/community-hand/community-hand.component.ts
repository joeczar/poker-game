import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pg-ui-community-hand',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>community-hand works!</p> `,
  styleUrls: ['./community-hand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityHandComponent {}
