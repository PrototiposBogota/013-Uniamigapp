import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { ListProjectsPage } from '../list-projects/list-projects';
import { AddProjectPage } from '../add-project/add-project';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListProjectsPage;
  tab2Root = AddProjectPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
