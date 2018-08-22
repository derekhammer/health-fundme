import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private router: Router){}
  
  projects: Project[] = [
    new Project("Derek's bad case of parvo", "I need some money for my parvo.  The doc says i'll be stinky till i get it fixed but i have no money so i want yours.  pay for my stuff you owe me.", 15, 5000, "James Hanley, American Parvo Institute", 1),
    new Project("Curts Bad Mood!", "I am grumpy and I don't feel good.  Please pay me so I will be happy.  I don't want to work so please go do work and make money and give it to me.", 0, 30000, "none", 2),
    new Project("EMERGENCY, my tum tum hurts!", "I ate a bad cheeseburger and now I have a tummy ache.  Please give me money because I have none and expect my things to be paid for me.", 800, 15000, "Derek Hammer, Alex Bunnel, Nick Rogers, Timmy Francis", 3)
  ]

  goToDetailPage(clickedProject: Project) {
       this.router.navigate(['projects', clickedProject.id]);
    }
}
