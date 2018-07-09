import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SelectAUserProvider } from '../../providers/select-a-user/select-a-user';

/**
 * Generated class for the SelectAUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-a-user',
  templateUrl: 'select-a-user.html',
  providers: [SelectAUserProvider]
})
export class SelectAUserPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _SelectAUserProvider : SelectAUserProvider,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAUserPage');
  }
  
  public dismiss() {
    this.viewController.dismiss();
  }

  public userSelected( id : any ){
    this.viewController.dismiss(id);
  }

}
