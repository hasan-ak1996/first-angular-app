import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName='testServer';
  severCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.severCreated = true;
    this.serverCreationStatus = 'server is created. name of the server is :' + this.serverName;
  }
  onUpdateServerName( name) {
    this.serverName = name.value;
  }


}
