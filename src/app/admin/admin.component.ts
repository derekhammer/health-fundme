import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent {

  constructor(private projectService: ProjectService) { }


  submitForm(title: string, description: string, currentFunds: number, targetFunds: number, contributors: string) {
      let newProject: Project = new Project(title, description, currentFunds, targetFunds, contributors);
      this.projectService.addProject(newProject);
    }

}
