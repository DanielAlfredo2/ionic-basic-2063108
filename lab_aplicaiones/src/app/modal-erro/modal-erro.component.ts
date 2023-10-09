import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-erro',
  templateUrl: './modal-erro.component.html',
  styleUrls: ['./modal-erro.component.scss'],
})
export class ModalErroComponent  implements OnInit {

  error : string ='';
  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}