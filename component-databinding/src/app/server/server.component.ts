import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';
  @ViewChild('serverNameInput') serverNameInput: ElementRef;

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerContent: HTMLInputElement) {
    this.serverCreated.emit(
      {
        serverName: this.serverNameInput.nativeElement.value,
        serverContent: newServerContent.value
      });
  }

  onAddBlueprint(newServerContent: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: this.serverNameInput.nativeElement.value, 
      serverContent: newServerContent.value });
  }
}
