import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnDestroy, OnInit {
  private subscriptionDataError: Subscription;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }
}
