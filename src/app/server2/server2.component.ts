import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
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
  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
