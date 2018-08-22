import { Injectable } from '@angular/core';
import { Project } from './models/project.model';

@Injectable()
export class ProjectService {
  projectId: string;
  projectToDisplay: Project;

  constructor() { }
  getProjects() {

  }
  getProjectById(projectId: number){
  
  }
}
