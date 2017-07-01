import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MetasService } from "../../services/metas.service";
import { Meta } from "../../data/metas.interface";

@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage {

  texto = "alo";

  constructor(public viewCtrl: ViewController, params: NavParams, private metasService: MetasService) {
    // this.texto = metasService.selecionaMeta(this.params.get('meta'));
    this.texto = params.get('meta').texto;
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }

} 
