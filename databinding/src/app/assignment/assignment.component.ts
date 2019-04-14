import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  studentName = '';
  constructor() { }

  ngOnInit() {
  }

  buttonBehaviour() {
    return this.studentName.length;
  }
  resetStudentName() {
    this.studentName = '';
  }

}
