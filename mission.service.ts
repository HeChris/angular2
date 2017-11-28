import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {
  private shoppingcartSource = new Subject<string>();
  shoppingcartObservable$ = this.shoppingcartSource.asObservable();
  index: number = 0;
  
  public sendShopingcart(mission: string) {
    this.index++;
    console.log(`send ${this.index}`)
    this.shoppingcartSource.next(mission);
  }
}
