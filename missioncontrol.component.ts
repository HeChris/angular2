import { Component } from '@angular/core';
import { MissionService } from './mission.service';
import { ChirdComponent } from './chird.component';

@Component({
  selector: 'app-mission-control',
  templateUrl: './missioncontrol.html',
  providers: [MissionService]
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  perours: string[] = [];
  missions = ['missson1',
    'missson2',
    'missson3'];
  nextMission = 0;
  index = 0;
  constructor(private missionService: MissionService) {
  }

  generateshoppingcart() {
    let mission = this.missions[this.nextMission++];
    this.missionService.sendShopingcart(mission);
    this.history.push(`send"${mission}" `);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
