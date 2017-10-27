import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
    
    templateUrl: 'my-page.html'
  })
export class MyPage{
    constructor(public navCtrl: NavController) {
        
          }
   
    onBack() {
            this.navCtrl.pop();
        }

}