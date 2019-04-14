import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<number>();
  count = 1;

  intervalVar;
  constructor() { }

  ngOnInit() {
  }


  startGame() {
    this.intervalVar = setInterval(() => {
      this.gameStarted.emit(this.count++);
    }, 1000);


  }

  stopGame() {
      if (this.intervalVar) {
        clearInterval(this.intervalVar);
      }
  }
}
