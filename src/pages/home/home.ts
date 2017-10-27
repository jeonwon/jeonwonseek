import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyPage } from '../my-page/my-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
jws = [{firstname:'전', lastname:'원식',age:40 },
{firstname:'홍', lastname:'길동',age:30 },
{firstname:'이', lastname:'순신',age:60 },
{firstname:'나', lastname:'기자',age:60 }]

show:boolean = true;
  constructor(public navCtrl: NavController) {

  }
  onClick() {
    this.navCtrl.push(MyPage);
  }

}
