import { ProjectService } from './../../services/project.services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-projects',
  templateUrl: 'list-projects.html',
})
export class ListProjectsPage {

  projects: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public projectService: ProjectService) {
    
    //Get list of projects
    this.projectService.getProjects().valueChanges().subscribe((listProjects)=>{
      this.projects = listProjects;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListProjectsPage');
  }

}
