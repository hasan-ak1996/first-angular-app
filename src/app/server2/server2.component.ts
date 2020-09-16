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
  servers = []; 
  sreverName='new server'; 
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
  
  public onAddServer() { 
        this.servers.push(this.sreverName); 
  }
  public onRemoveServer(index) { 
    this.servers.splice(index, 1); 
}  
}
