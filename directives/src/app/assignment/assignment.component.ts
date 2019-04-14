import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  displayContent = false;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
    this.displayContent = !this.displayContent;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

}
