import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() selectedProject;
  constructor() { }

  ngOnInit() {
  }

}
