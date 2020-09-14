import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles : [`
    .online{
      color : yellow;
    }
  `],

})
export class AppComponent implements OnInit{
  serverID : Number =10;
  serverStatus : string = 'offline';
  isDisabled : boolean = true;
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName='';
  priceTotal = 2500;
  myDate = new Date();
  jsonObject = {name:'hasan' , age:'24' ,education : 'computer',};
  employeesNames = ['ahmad','mohammad','yara', 'wessam','maha','fares','yousef'];
  servers = [];

  constructor(){
    setTimeout(()=>{
    this.allowNewServer = true;
      },5000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }
  onAddServer(){
    this.servers.push('new server');
  }
  onRemoveServer(Id : number){
    this.servers.splice(Id,1);
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'blue' : 'red'   
  }
  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'first-angular';
}
