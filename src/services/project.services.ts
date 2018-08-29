import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService{
  
  constructor(public db: AngularFireDatabase){

  }

  public getProjects(){
    return this.db.list('/projects/');
  }

  public getProject(id){
    return this.db.object('/projects/' + id);
  }

  /**
   * This method save project to firebase
   * @param project Object with the data of the project
   */
  public createProject(project){
    //get the unique id from firebase
    project.id = this.db.database.ref('/projects/').push().key;
    //add the time when the project was created
    project.createdAt = Date.now();
    // save project to firebase
    return this.db.database.ref('/projects/'+ project.id).set(project);
  }

  public editProject(project){
    return this.db.database.ref('/projects/'+ project.id).set(project);
  }

  public deleteProject(project){

  }
}