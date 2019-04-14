import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit() {
  }


  gameStarted(count: number) {
    console.log('Count is ', count);
    if (count % 2 === 0) {
      this.evenNumbers.push(count);
    } else {
      this.oddNumbers.push(count);
    }

  }
}
