import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  projectId: number = null;//change this to a string, to take firebases id
  constructor(private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = parseInt(urlParameters['id']);
    });
  }

}
