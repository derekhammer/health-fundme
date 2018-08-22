import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ProjectService]
})
export class ListComponent implements OnInit {

  report(){
    console.log(this.projects);
  }

  projects: FirebaseListObservable<any[]>;
  constructor(private router: Router, private projectService: ProjectService){}
 ngOnInit(){
   this.projects = this.projectService.getProjects();
 }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
