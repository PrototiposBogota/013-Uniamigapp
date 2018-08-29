import { ProjectService } from './../../services/project.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {

  project: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public projectService: ProjectService) {
  }

  /**
   * save project to firebase
   */
  addProject(){
    this.projectService.createProject(this.project);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectPage');
  }

}
