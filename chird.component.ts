import { Component, OnInit, OnDestroy } from '@angular/core';
import { MissionService } from './mission.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-chird',
  templateUrl: './chird.component.html'
})
export class ChirdComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  received: string[] = [];
  index: number = 0;
  constructor(private missionService: MissionService) {
    this.subscription = missionService.shoppingcartObservable$.subscribe(
      r => {
        this.index++;
        console.log(`received ${this.index}`);
        this.received.push(r);
      });
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
