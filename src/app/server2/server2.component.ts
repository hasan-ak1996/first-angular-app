import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  serverID : Number =10;
  serverStatus : string = 'offline';
  isDisabled : boolean = true;
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName='';
  servers = [];
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.allowNewServer = true;
        },5000);
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }
  getServerStatus(){
    return this.serverStatus;
  }
  
  onAddServer(){
    this.servers.push('new server');
  }

  onRemoveServer(Id : number){
    this.servers.splice(Id,1);
  }
}
