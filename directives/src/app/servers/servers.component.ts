import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  constructor() { }

  ngOnInit() {
  }

  onAddNewServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server created with the name of ' + this.serverName;
  }

}
