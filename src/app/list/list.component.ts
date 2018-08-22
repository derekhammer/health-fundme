import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProjectService]
})
export class ListComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService){}
 ngOnInit(){
   this.projects = this.projectService.getProjects()
 }
  projects: Project[];

  goToDetailPage(clickedProject: Project) {
       this.router.navigate(['projects', clickedProject.id]);
    }
}
