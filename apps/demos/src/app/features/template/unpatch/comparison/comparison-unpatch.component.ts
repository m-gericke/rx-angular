import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rxa-demo-basics',
  template: `
    <rxa-dirty-check></rxa-dirty-check>

    ---

    <button mat-raised-button (click)="nativeAngular()">Native Angular</button>
    <br />
    <button mat-raised-button [runOutsideZone] (click)="runOutSideAngular()">
      Zone Run Outside Angular
    </button>
    <br />
    <button mat-raised-button [unpatch] (click)="unpatch()">
      Rx-Angular Unpatch
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ComparisonUnpatchComponent {
  nativeAngular() {
    console.log('nativeAngular');
  }

  runOutSideAngular() {
    console.log('runOutSideAngular');
  }

  unpatch() {
    console.log('unpatch');
  }
}
