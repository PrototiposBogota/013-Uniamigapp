import { ProjectService } from './../../services/project.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-project',
  templateUrl: 'show-project.html',
})
export class ShowProjectPage {
  projectId: string = '';
  project: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public projectService: ProjectService) {
    this.projectId = this.navParams.get('projectId');
    this.projectService.getProject(this.projectId).valueChanges().subscribe((showProject)=>{
      this.project = showProject;
      console.log (this.project)
    });
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowProjectPage');
  }



}
